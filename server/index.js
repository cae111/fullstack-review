const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername  = require(__dirname + '/../helpers/github.js');
const fromMongoose = require('../database/index.js');

let app = express();
app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

const repoList = fromMongoose.repoList;

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
 // console.log('server------' + JSON.stringify(req.body.userName))
  res.json(req.body);
  getReposByUsername.getReposByUsername(req.body.userName)
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
 
  //let cb = (data) => {res.send(data)}
  console.log(req.body)
  repoList((err,result) => {
    if(err){
      console.log('err'+ err)
    }
    console.log('data from server '+result)
    res.json(result)
  });
  
 
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

