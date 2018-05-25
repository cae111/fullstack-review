const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name:String,
  userName:String,
  decription:String,
  url:String,
  forks:Number,

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

module.exports.save = save;

