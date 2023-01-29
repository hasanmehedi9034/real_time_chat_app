const express = require('express')


// internal imports
const { getUsers } = require('../controller/usersController')


const router = express.Router();


// Login Page
router.get('/', getUsers);

module.exports = router;
