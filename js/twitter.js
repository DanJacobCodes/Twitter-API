var Twit = require('twit');

var T = new Twit({
  consumer_key:         'LDjKxTYc1nW7oZkBtifDBzNLa',
  consumer_secret:      'EKwJmx1uDZCFoADfQWkRkX4TOnsUMl7Esd3TZytijpPiNcxMma',
  access_token:         '48025482-6dd6p28XT0BXfCcZPWnPM2IO3ztuqHxmdWQ748WUK',
  access_token_secret:  'eGd9Gh9vLJDC0kaN18RaJk1y5Q4Rkes78bgKb2hwQBEVF',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});


// T.get('search/tweets', { q: 'seahawks', count: 3 }, function(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++){
//     console.log(tweets[i].text);
//   }
// });



var tweet = {
  status: 'OMG its working!!!'
}

T.post('statuses/update', tweet , function(err, data, response) {
  console.log(data)
});
