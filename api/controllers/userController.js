const User = require('../models/user');
const userService = require('../services/userService');

const createUser = (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  };

  userService.save(user)
    .then(user => res.send(user))
    .catch(err => res.send('Error saving user: ' + err));
};

const getAllUsers = (req, res) => {
  return userService.getAllUsers()
    .then(users => res.send(users))
    .catch(err => res.send('Error fetching users: ' + err));
};

module.exports = { createUser, getAllUsers };