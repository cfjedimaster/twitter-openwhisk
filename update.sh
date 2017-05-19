#!/bin/bash
cp package.get.json package.json
zip -rq temp.zip gettweets.js package.json node_modules
wsk action update twitter/getTweets --kind nodejs:6 temp.zip
rm temp.zip

cp package.send.json package.json
zip -rq temp.zip tweet.js package.json node_modules
wsk action update twitter/sendTweet --kind nodejs:6 temp.zip
rm temp.zip