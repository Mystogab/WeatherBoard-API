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
  User.find({}, (err, users) => {
    if (err) return res.status(500).send("Error fetching users to database");
    res.status(200).send(users);
  });
};

module.exports = { createUser, getAllUsers };