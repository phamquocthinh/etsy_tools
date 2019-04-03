'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _oauth = require('oauth');

var _oauth2 = _interopRequireDefault(_oauth);

var _defaulValues = require('../config/defaulValues');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = _express2.default.Router();

var oa = new _oauth2.default.OAuth('https://openapi.etsy.com/v2/oauth/request_token', 'https://openapi.etsy.com/v2/oauth/access_token', _defaulValues.CONSUMER_KEY, _defaulValues.CONSUMER_SECRET, '1.0A', _defaulValues.CALLBACK_URL, 'HMAC-SHA1');

// Root route
token.get('/', function (req, res) {

    // If session variable has not been initialized
    if (!req.session.oauth) {
        req.session.oauth = {};
    }

    // If access token has not been generated
    if (!req.session.oauth.access_token) {
        res.redirect('/token/get-access-token');
    } else {
        console.log('zzz');
    }
});

// Request OAuth request token, and redirect the user to authorization page
token.get('/get-access-token', function (req, res) {

    console.log('*** get-access-token ***');

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
token.get('/callback', function (req, res) {

    console.log('*** callback ***');

    if (req.session.oauth) {

        req.session.oauth.verifier = req.query.oauth_verifier;

        oa.getOAuthAccessToken(req.session.oauth.token, req.session.oauth.token_secret, req.session.oauth.verifier, function (error, token, token_secret, results) {
            if (error) {
                console.log(error);
            } else {
                req.session.oauth.access_token = token;
                req.session.oauth.access_token_secret = token_secret;

                console.log('Token: ' + token);
                console.log('Secret: ' + token_secret);
                console.log('Verifier: ' + req.session.oauth.verifier);

                res.redirect('/product');
            }
        });
    }
});

module.exports = token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdG9rZW4uanMiXSwibmFtZXMiOlsidG9rZW4iLCJleHByZXNzIiwiUm91dGVyIiwib2EiLCJvYXV0aCIsIk9BdXRoIiwiQ09OU1VNRVJfS0VZIiwiQ09OU1VNRVJfU0VDUkVUIiwiQ0FMTEJBQ0tfVVJMIiwiZ2V0IiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImFjY2Vzc190b2tlbiIsInJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsImdldE9BdXRoUmVxdWVzdFRva2VuIiwiZXJyb3IiLCJ0b2tlbl9zZWNyZXQiLCJyZXN1bHRzIiwidmVyaWZpZXIiLCJxdWVyeSIsIm9hdXRoX3ZlcmlmaWVyIiwiZ2V0T0F1dGhBY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbl9zZWNyZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQUlBLFFBQVFDLGtCQUFRQyxNQUFSLEVBQVo7O0FBRUEsSUFBSUMsS0FBSyxJQUFJQyxnQkFBTUMsS0FBVixDQUNMLGlEQURLLEVBRUwsZ0RBRkssRUFHTEMsMEJBSEssRUFJTEMsNkJBSkssRUFLTCxNQUxLLEVBTUxDLDBCQU5LLEVBT0wsV0FQSyxDQUFUOztBQVVBO0FBQ0FSLE1BQU1TLEdBQU4sQ0FBVSxHQUFWLEVBQWUsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQWtCOztBQUU3QjtBQUNBLFFBQUksQ0FBQ0QsSUFBSUUsT0FBSixDQUFZUixLQUFqQixFQUF3QjtBQUNwQk0sWUFBSUUsT0FBSixDQUFZUixLQUFaLEdBQW9CLEVBQXBCO0FBQ0g7O0FBRUQ7QUFDQSxRQUFHLENBQUNNLElBQUlFLE9BQUosQ0FBWVIsS0FBWixDQUFrQlMsWUFBdEIsRUFBb0M7QUFDaENGLFlBQUlHLFFBQUosQ0FBYSx5QkFBYjtBQUNILEtBRkQsTUFFTztBQUNIQyxnQkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDSDtBQUNKLENBYkQ7O0FBZUE7QUFDQWhCLE1BQU1TLEdBQU4sQ0FBVSxtQkFBVixFQUErQixVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7O0FBRTlDSSxZQUFRQyxHQUFSLENBQVksMEJBQVo7O0FBRUFiLE9BQUdjLG9CQUFILENBQXdCLFVBQVVDLEtBQVYsRUFBaUJsQixLQUFqQixFQUF3Qm1CLFlBQXhCLEVBQXNDQyxPQUF0QyxFQUErQztBQUNuRSxZQUFJRixLQUFKLEVBQVc7QUFDUEgsb0JBQVFDLEdBQVIsQ0FBWUUsS0FBWjtBQUNILFNBRkQsTUFFTztBQUNIUixnQkFBSUUsT0FBSixDQUFZUixLQUFaLENBQWtCSixLQUFsQixHQUEwQkEsS0FBMUI7QUFDQVUsZ0JBQUlFLE9BQUosQ0FBWVIsS0FBWixDQUFrQmUsWUFBbEIsR0FBaUNBLFlBQWpDOztBQUVBSixvQkFBUUMsR0FBUixDQUFZLFlBQVloQixLQUF4QjtBQUNBZSxvQkFBUUMsR0FBUixDQUFZLGFBQWFHLFlBQXpCOztBQUVBUixnQkFBSUcsUUFBSixDQUFhTSxRQUFRLFdBQVIsQ0FBYjtBQUNIO0FBQ0osS0FaRDtBQWNILENBbEJEOztBQW9CQTtBQUNBcEIsTUFBTVMsR0FBTixDQUFVLFdBQVYsRUFBdUIsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1COztBQUV0Q0ksWUFBUUMsR0FBUixDQUFZLGtCQUFaOztBQUVBLFFBQUlOLElBQUlFLE9BQUosQ0FBWVIsS0FBaEIsRUFBdUI7O0FBRW5CTSxZQUFJRSxPQUFKLENBQVlSLEtBQVosQ0FBa0JpQixRQUFsQixHQUE2QlgsSUFBSVksS0FBSixDQUFVQyxjQUF2Qzs7QUFFQXBCLFdBQUdxQixtQkFBSCxDQUNJZCxJQUFJRSxPQUFKLENBQVlSLEtBQVosQ0FBa0JKLEtBRHRCLEVBRUlVLElBQUlFLE9BQUosQ0FBWVIsS0FBWixDQUFrQmUsWUFGdEIsRUFHSVQsSUFBSUUsT0FBSixDQUFZUixLQUFaLENBQWtCaUIsUUFIdEIsRUFJSSxVQUFVSCxLQUFWLEVBQWlCbEIsS0FBakIsRUFBd0JtQixZQUF4QixFQUFzQ0MsT0FBdEMsRUFBK0M7QUFDM0MsZ0JBQUlGLEtBQUosRUFBVTtBQUNOSCx3QkFBUUMsR0FBUixDQUFZRSxLQUFaO0FBQ0gsYUFGRCxNQUVPO0FBQ0hSLG9CQUFJRSxPQUFKLENBQVlSLEtBQVosQ0FBa0JTLFlBQWxCLEdBQWlDYixLQUFqQztBQUNBVSxvQkFBSUUsT0FBSixDQUFZUixLQUFaLENBQWtCcUIsbUJBQWxCLEdBQXdDTixZQUF4Qzs7QUFFQUosd0JBQVFDLEdBQVIsQ0FBWSxZQUFZaEIsS0FBeEI7QUFDQWUsd0JBQVFDLEdBQVIsQ0FBWSxhQUFhRyxZQUF6QjtBQUNBSix3QkFBUUMsR0FBUixDQUFZLGVBQWVOLElBQUlFLE9BQUosQ0FBWVIsS0FBWixDQUFrQmlCLFFBQTdDOztBQUVBVixvQkFBSUcsUUFBSixDQUFhLFVBQWI7QUFDSDtBQUNKLFNBakJMO0FBbUJIO0FBQ0osQ0E1QkQ7O0FBOEJBWSxPQUFPQyxPQUFQLEdBQWlCM0IsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBvYXV0aCBmcm9tICdvYXV0aCdcbmltcG9ydCB7IENPTlNVTUVSX0tFWSwgQ09OU1VNRVJfU0VDUkVULCBDQUxMQkFDS19VUkwgfSBmcm9tICcuLi9jb25maWcvZGVmYXVsVmFsdWVzJ1xuXG5sZXQgdG9rZW4gPSBleHByZXNzLlJvdXRlcigpO1xuXG52YXIgb2EgPSBuZXcgb2F1dGguT0F1dGgoXG4gICAgJ2h0dHBzOi8vb3BlbmFwaS5ldHN5LmNvbS92Mi9vYXV0aC9yZXF1ZXN0X3Rva2VuJyxcbiAgICAnaHR0cHM6Ly9vcGVuYXBpLmV0c3kuY29tL3YyL29hdXRoL2FjY2Vzc190b2tlbicsXG4gICAgQ09OU1VNRVJfS0VZLFxuICAgIENPTlNVTUVSX1NFQ1JFVCxcbiAgICAnMS4wQScsXG4gICAgQ0FMTEJBQ0tfVVJMLFxuICAgICdITUFDLVNIQTEnXG4pO1xuXG4vLyBSb290IHJvdXRlXG50b2tlbi5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcyl7XG5cbiAgICAvLyBJZiBzZXNzaW9uIHZhcmlhYmxlIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZFxuICAgIGlmICghcmVxLnNlc3Npb24ub2F1dGgpIHtcbiAgICAgICAgcmVxLnNlc3Npb24ub2F1dGggPSB7fTtcbiAgICB9XG5cbiAgICAvLyBJZiBhY2Nlc3MgdG9rZW4gaGFzIG5vdCBiZWVuIGdlbmVyYXRlZFxuICAgIGlmKCFyZXEuc2Vzc2lvbi5vYXV0aC5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgcmVzLnJlZGlyZWN0KCcvdG9rZW4vZ2V0LWFjY2Vzcy10b2tlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd6enonKVxuICAgIH1cbn0pO1xuXG4vLyBSZXF1ZXN0IE9BdXRoIHJlcXVlc3QgdG9rZW4sIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byBhdXRob3JpemF0aW9uIHBhZ2VcbnRva2VuLmdldCgnL2dldC1hY2Nlc3MtdG9rZW4nLCBmdW5jdGlvbihyZXEsIHJlcykge1xuXG4gICAgY29uc29sZS5sb2coJyoqKiBnZXQtYWNjZXNzLXRva2VuICoqKicpXG5cbiAgICBvYS5nZXRPQXV0aFJlcXVlc3RUb2tlbihmdW5jdGlvbiAoZXJyb3IsIHRva2VuLCB0b2tlbl9zZWNyZXQsIHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXEuc2Vzc2lvbi5vYXV0aC50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgcmVxLnNlc3Npb24ub2F1dGgudG9rZW5fc2VjcmV0ID0gdG9rZW5fc2VjcmV0O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW46ICcgKyB0b2tlbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VjcmV0OiAnICsgdG9rZW5fc2VjcmV0KTtcblxuICAgICAgICAgICAgcmVzLnJlZGlyZWN0KHJlc3VsdHNbXCJsb2dpbl91cmxcIl0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pO1xuXG4vLyBHZXQgT0F1dGggYWNjZXNzIHRva2VuIG9uIGNhbGxiYWNrXG50b2tlbi5nZXQoJy9jYWxsYmFjaycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG5cbiAgICBjb25zb2xlLmxvZygnKioqIGNhbGxiYWNrICoqKicpXG5cbiAgICBpZiAocmVxLnNlc3Npb24ub2F1dGgpIHtcblxuICAgICAgICByZXEuc2Vzc2lvbi5vYXV0aC52ZXJpZmllciA9IHJlcS5xdWVyeS5vYXV0aF92ZXJpZmllcjtcblxuICAgICAgICBvYS5nZXRPQXV0aEFjY2Vzc1Rva2VuKFxuICAgICAgICAgICAgcmVxLnNlc3Npb24ub2F1dGgudG9rZW4sXG4gICAgICAgICAgICByZXEuc2Vzc2lvbi5vYXV0aC50b2tlbl9zZWNyZXQsXG4gICAgICAgICAgICByZXEuc2Vzc2lvbi5vYXV0aC52ZXJpZmllcixcbiAgICAgICAgICAgIGZ1bmN0aW9uKCBlcnJvciwgdG9rZW4sIHRva2VuX3NlY3JldCwgcmVzdWx0cyApe1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXEuc2Vzc2lvbi5vYXV0aC5hY2Nlc3NfdG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgcmVxLnNlc3Npb24ub2F1dGguYWNjZXNzX3Rva2VuX3NlY3JldCA9IHRva2VuX3NlY3JldDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW46ICcgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWNyZXQ6ICcgKyB0b2tlbl9zZWNyZXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmVyaWZpZXI6ICcgKyByZXEuc2Vzc2lvbi5vYXV0aC52ZXJpZmllcik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzLnJlZGlyZWN0KCcvcHJvZHVjdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRva2VuIl19