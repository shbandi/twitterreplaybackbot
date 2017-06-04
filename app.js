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
    console.log('success', data);
  } else {
    console.console.log(err);
  }
})
