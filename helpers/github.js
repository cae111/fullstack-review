const request = require('request');
const config = require('../config.js');

let getReposByUsername = (name) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options,function(error,response,body){
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    console.log(JSON.parse(body)[0])
  })
}

module.exports.getReposByUsername = getReposByUsername;
//https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000
//'https://api.github.com/users?/repos?page=1&per_page=10',
/// users/:username/repos

///users/:username/repos
//"https://api.github.com/users/blackmiaool/repos"
