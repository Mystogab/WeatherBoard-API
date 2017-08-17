const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


//routes
router.post('/signup', userController.createUser);
router.get('/login', userController.login);


//export
module.exports = router;