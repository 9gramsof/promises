/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  //make a new promise with resolve and reject
  var result = new Promise((resolve, reject) => {
    fs.readFile(`${filePath}`, (err, fileData)=> {
      if (err) {
        reject(err);
      } else {
        resolve(fileData.toString().split('\n')[0]);
      }
    });
  });
  //use readfile method
  //if error -> reject
  //otherwise -> resolve
  return result;

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  let promise = new Promise((resolve, reject) => {
    request.get(url, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
