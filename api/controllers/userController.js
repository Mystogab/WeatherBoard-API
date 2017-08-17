const User = require('../models/user');
const userService = require('../services/userService');
const boardService = require('../services/boardService');

const controller = {};

controller.createUser = (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  };

  const userP = userService.save(user)
    .catch(err => res.send('Error saving user: ' + err));

  userP.then((user) => {
    boardService.createBoard(user._id).then(console.log);
    return user;
  }).then(user => res.send(user));
};


// this is so bad, makes me cry TODO: Do a real authentication here.
controller.login = (req, res) => {
  userService.findUserByUsername(req.query.username)
    .then((user) => user.password === req.query.password ? user : 'invalidPassword')
    .then(user => res.send(user))
    .catch(err => res.send('Error getting user' + err));
};

controller.getAllUsers = (req, res) => {
  return userService.getAllUsers()
    .then(users => res.send(users))
    .catch(err => res.send('Error fetching users: ' + err));
};

module.exports = controller;