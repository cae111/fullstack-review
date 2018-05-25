const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name:String,
  userName:String,
  decription:String,
  url:String,
  unique: true
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userRepo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  product.save().then(function(product) {
    console.log('saved to database' + userRepo);
 });
}

module.exports.save = save;
