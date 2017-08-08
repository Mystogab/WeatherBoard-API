const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost/users');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connection to users DB ok!');
});

const findUserById = (id) => {
  return User.find({ username: id });
};

module.exports = { findUserById };