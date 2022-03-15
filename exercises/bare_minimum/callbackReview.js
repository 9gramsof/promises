/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
const readline = require('readline');
const https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(`${filePath}`, (err, fileData) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, fileData.toString().split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`

//Input - a URL
//Output - I think we have to make a get request and then get the response's status code
//
var getStatusCode = function (url, callback) {
  // TODO
  // let makeGetRequest = function(url, CB) {
  //   return $.ajax({
  //     url: url,
  //     type: 'GET',
  //     dataType: 'json',
  //     success: CB
  //   });
  // }

  // makeGetRequest(url, )
  https.request(url, (res) => {
    console.log(res.statusCode);
  });
  //if the response method is GET
  //then get the response's status code

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
