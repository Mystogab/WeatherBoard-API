const express = require('express');
const app = express();
const db = require('./api/services/db');
const routes = require('./api/routes')(app);


module.exports = app;