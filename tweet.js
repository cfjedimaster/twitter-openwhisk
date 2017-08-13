const Twitter = require('twitter');
const request = require('request');

/*
I send a tweet. i need:

args.status (the text)
args.image (url of an image)

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

		/*
		Special branching for images. Since images require a two step process, we split
		up the code into two paths.
		*/
		console.log('doing send tweet', args);

		if(!args.image) {
			console.log('doing easy branch');
			client.post('statuses/update', {status:args.status}, function(err, tweet, response) {
				if(err) return reject(err);
				console.log('aobut to resolve');
				resolve({response:response});
			});
		} else {

			request.get({url:args.image, encoding:null}, function(err, response, body) {
				if(!err && response.statusCode === 200) {

					client.post('media/upload', {media: body}, function(error, media, response) {

						if(error) {
							reject({error:error});
						}
						
						var status = {
							status: args.status,
							media_ids: media.media_id_string 
						}

						client.post('statuses/update', status, function(error, tweet, response){
							if (!error) {
								resolve({response:response});
							}
						});

					});
				}
			});
		}

	});

}

exports.main = main;