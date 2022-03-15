/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

var pluck = require('./promiseConstructor').pluckFirstLineFromFileAsync;
var github = require('./promisification').getGitHubProfileAsync;
var writeFileAsync = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluck(readFilePath)
    .then(github)
    .then((profile) => {
      return writeFileAsync(writeFilePath, JSON.stringify(profile));
    });
  //if we're succesful (the promises were fulfilled) in getting the username
  //then send request
  //then write a response

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

//pluck first line
//get githubProfile
//generate token
//manipulate files
//get status code