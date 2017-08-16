const User = require('../models/user');

const save = (user) => {
  return new User(user).save();
};

const findUserById = (id) => {
  return User.find({ _id: id });
};

const getAllUsers = () => {
  return User.find();
};
module.exports = { findUserById, save, getAllUsers };