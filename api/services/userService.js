const User = require('../models/user');

const service = {};

service.save = (user) => {
  return new User(user).save();
};

service.findUserById = (id) => {
  return User.find({ _id: id });
};

service.findUserByUsername = (name) => {
  return User.findOne({ username: name });
};

service.getAllUsers = () => {
  return User.find();
};
module.exports = service;