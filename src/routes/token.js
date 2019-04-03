import express from 'express';
import oauth from 'oauth'
import { CONSUMER_KEY, CONSUMER_SECRET, CALLBACK_URL } from '../config/defaulValues'

let token = express.Router();

var oa = new oauth.OAuth(
    'https://openapi.etsy.com/v2/oauth/request_token',
    'https://openapi.etsy.com/v2/oauth/access_token',
    CONSUMER_KEY,
    CONSUMER_SECRET,
    '1.0A',
    CALLBACK_URL,
    'HMAC-SHA1'
);

// Root route
token.get('/', function(req, res){

    // If session variable has not been initialized
    if (!req.session.oauth) {
        req.session.oauth = {};
    }

    // If access token has not been generated
    if(!req.session.oauth.access_token) {
        res.redirect('/token/get-access-token');
    } else {
        console.log('zzz')
    }
});

// Request OAuth request token, and redirect the user to authorization page
token.get('/get-access-token', function(req, res) {

    console.log('*** get-access-token ***')

    oa.getOAuthRequestToken(function (error, token, token_secret, results) {
        if (error) {
            console.log(error);
        } else {
            req.session.oauth.token = token;
            req.session.oauth.token_secret = token_secret;

            console.log('Token: ' + token);
            console.log('Secret: ' + token_secret);

            res.redirect(results["login_url"]);
        }
    });

});

// Get OAuth access token on callback
token.get('/callback', function(req, res) {

    console.log('*** callback ***')

    if (req.session.oauth) {

        req.session.oauth.verifier = req.query.oauth_verifier;

        oa.getOAuthAccessToken(
            req.session.oauth.token,
            req.session.oauth.token_secret,
            req.session.oauth.verifier,
            function( error, token, token_secret, results ){
                if (error){
                    console.log(error);
                } else {
                    req.session.oauth.access_token = token;
                    req.session.oauth.access_token_secret = token_secret;

                    console.log('Token: ' + token);
                    console.log('Secret: ' + token_secret);
                    console.log('Verifier: ' + req.session.oauth.verifier);

                    res.redirect('/product')
                }
            }
        );
    }
});

module.exports = token