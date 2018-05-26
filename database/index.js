const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name:String,
  userName:String,
  url:String,
  description:String,
  forks:String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userRepo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo(userRepo);
  repo.save().then(function(product) {
    console.log('saved to database', product);
 });
}

let repoList = (cb) => {
  
  Repo.find(function(err, data) {
    //console.log('from mongoose'+data)
    cb(null,data);
  }).sort({forks:-1}).limit(25);
}

module.exports.save = save;
module.exports.repoList = repoList;
/*
Animal.find().byName('fido').exec(function(err, animals) {
  console.log(animals);
  collection.find().sort({datefield: -1}, function(err, cursor){...});
});
.toArray(function(err, docs) {...});
*/
