var Twit = require( 'twit' );
var DotEnv = require('dotenv').config();

var T = new Twit({
	consumer_key:         process.env.TWIT_KEY,
	consumer_secret:      process.env.TWIT_SECRET,
	access_token:         process.env.TWIT_ACCESS_TOKEN,
	access_token_secret:  process.env.TWIT_ACCESS_TOKEN_SECRET,
	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
