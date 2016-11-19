var Twit = require( 'twit' );
var DotEnv = require('dotenv').config();
var prettyjson = require('prettyjson');
var Tabletop = require( 'tabletop' );

Tabletop.init({
	key: process.env.DATA_SHEET,
	callback: function( data, tabletop ) { console.log( data ); },
	simpleSheet: true
});

var T = new Twit({
	consumer_key:         process.env.TWIT_KEY,
	consumer_secret:      process.env.TWIT_SECRET,
	access_token:         process.env.TWIT_ACCESS_TOKEN,
	access_token_secret:  process.env.TWIT_ACCESS_TOKEN_SECRET,
	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var options = { track: ['rawstory com', 'infowars com', 'breitbart com', 'prisonplanet com'] };
var domains = ['rawstory.com', 'infowars.com', 'breitbart.com', 'prisonplanet.com'];
var regexDomains = new RegExp( domains.join('|') );
// var stream = T.stream( 'statuses/filter', options);

// stream.on( 'tweet', function( tweet ) {
// 	if ( tweet.entities.urls[0] !== undefined ) {
// 		if ( tweet.entities.urls[0].expanded_url !== null ) {
// 			if ( regexDomains.test( tweet.entities.urls[0].expanded_url ) ){
// 				console.log( tweet );
// 			}
// 		}

// 	}

// });

// stream.on( 'error', function( error ) {
// 	console.log( error );
// });