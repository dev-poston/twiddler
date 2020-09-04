/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.hammerheadshark = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how I', 'completely', 'nearly', 'productively', 'efficiently', 'last night I', 'that was crazy how I', 'that boat', 'a whale', 'a seedy old man'];
var verbs = ['ate', 'swam', 'jumped', 'bite', 'bit', 'eat', 'basked', 'sank', 'swim', 'enjoyed', 'played', 'hunted', 'slept', 'sleep', 'ran', 'smell', 'smelled', 'chased', 'twiddled'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['shark', 'turtle', 'dolphin', 'human', 'diver', 'license plate', 'fish', 'squid', 'Quint', 'belief system', 'swimmer', 'bad decision', 'Martin Brody', 'crab', 'clam', 'Matt Hooper'];
var tags = ['#sharklife', '#findingnemo', '#justkeepswimming', '#bigbite', '#finproblems', '#sharkattack', '#jaws', '#cantstopbitingthings', '#howamitypingthis', '#hellateeth', '#splash', '#neversleep'];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

for(var i = 0; i < 20; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  if(!streams.users[visitor]) {
    streams.users[visitor] = [];
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};