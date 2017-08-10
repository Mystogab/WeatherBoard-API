const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/users');
//enable promise
mongoose.Promise = require('bluebird');

module.exports = mongoose.connection;