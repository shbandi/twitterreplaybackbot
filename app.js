"use strict";
//load twitter npm module


var Twitter = require('twitter');
var config = require('./config.js');

//pass the config to Twitter for authentication., the npm module simplifies the process to interacting with Twitter API for GET and POST requests.

var T = new Twitter(config);

//build params to pass for the search API
// @param q is the requred param t fetch the search query
// count - specify number tweets to return
// result_type: - returns the results like recent
// lang - returns the tweets in lang

var params = {
  q:'#javascript',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

//GET requests

T.get('search/tweets', params, function(err, data, response) {
  if(!err) {
    console.log('get success', data);

    for(let i = 0; i< data.statuses.length; i++) {
      //tweet id from response
      let id = { id: data.statuses[i].id_str}
      //Favorite the tweet selected
      T.post('favorites/create', id, function(err, response){
        if(err) {
          console.log(err[0].message);
        } else {
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('tweet that got favorited:', `https://twitter.com/${username}/status/${tweetId}` )
        }
      })
    }
  } else {
    console.console.log('get failed', err);
  }
})
