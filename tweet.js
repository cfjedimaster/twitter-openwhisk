const Twitter = require('twitter');
const request = require('request');

/*
I send a tweet. i need:

args.status (the text)

and that's all I'm supported for now! Note, unlike getTweets
which can get by with less access, for this you need user auth
as documented here: https://www.npmjs.com/package/twitter
*/

function main(args) {

	return new Promise( (resolve, reject) => {

		let client = new Twitter({
			consumer_key:args.consumer_key,
			consumer_secret:args.consumer_secret,
			access_token_key:args.access_token_key,
			access_token_secret:args.access_token_secret
		});

		client.post('statuses/update', {status:args.status}, function(err, tweet, response) {
			if(err) return reject(err);
			resolve({response:response});
		});

	});

}

exports.main = main;