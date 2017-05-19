Twitter
===

This is the beginning of (hopefully) a package of actions related to working with Twitter via OpenWhisk. Docs are rough, sorry.

Depending on what action you use, you must pass:

* consumer_key
* consumer_secret

and possibly:

* access_token_key
* access_token_secret


### Actions

getTweets - returns an array of tweets matching search terms. Args supported:

* account - return tweets from an account
* term - basic search term
* since - returns items after this date

sendTweet - sends a tweet. This one requires the access_token values. Args supported:

* status - text of the new tweet

### License

Copyright 2017 Raymond Camden

Licensed under the [Apache License, Version 2.0 (the "License")](http://www.apache.org/licenses/LICENSE-2.0.html).

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.