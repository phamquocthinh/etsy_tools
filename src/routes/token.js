import express from 'express'
import oauth from 'oauth'
import { CALLBACK_URL } from '../config/defaulValues'

import Accounts from '../models/account'

let token = express.Router()

token.route('/')
    .get((req, res) => {
        return res.render('token')
    })
    .post((req, res) => {
        let {key, secret} = req.body

        let oa = new oauth.OAuth(
            'https://openapi.etsy.com/v2/oauth/request_token',
            'https://openapi.etsy.com/v2/oauth/access_token',
            key,
            secret,
            '1.0A',
            CALLBACK_URL,
            'HMAC-SHA1'
        )

        if (!req.session.oauth) {
            req.session.oauth = {}
        }

        oa.getOAuthRequestToken((error, token, token_secret, results) => {
            if (error) {
                console.log(error)
                return res.json({status: 'error', message: error})
            } else {
                req.session.oauth.key = key
                req.session.oauth.secret = secret
                req.session.oauth.token = token
                req.session.oauth.token_secret = token_secret
    
                return res.json(results)
            }
        })
    })

// Get OAuth access token on callback
token.route('/callback')
    .get((req, res) => {
        if (req.session.oauth) {
            let verifier = req.query.oauth_verifier
            let {key, secret, token, token_secret} = req.session.oauth

            let oa = new oauth.OAuth(
                'https://openapi.etsy.com/v2/oauth/request_token',
                'https://openapi.etsy.com/v2/oauth/access_token',
                key,
                secret,
                '1.0A',
                CALLBACK_URL,
                'HMAC-SHA1'
            )

            oa.getOAuthAccessToken(
                token,
                token_secret,
                verifier,
                async (error, access_token, access_token_secret, results) => {
                    if (error){
                        console.log(error)
                        return res.json({status: 'error', message: error})
                    } else {
                        console.log('Token: ' + access_token)
                        console.log('Secret: ' + access_token_secret)
                        console.log('Verifier: ' + verifier)

                        await Accounts.create({
                            name: Date.now() + 'new-account',
                            consumer_key: key,
                            consumer_secret: secret,
                            token: access_token,
                            token_secret: access_token_secret
                        })

                        return res.redirect('/account')
                    }
                }
            )
        }
    })

module.exports = token