const express = require('express')
const {addUserValidators, addUserValidationHandler} = require('../middlewares/common/users/userValidator')
// const { check } = require('express-validator')


// internal imports
const { getUsers } = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/common/users/avatarUpload');

// init user router
const router = express.Router();


// Login Page
router.get('/', decorateHtmlResponse('user'), getUsers);

router.post('/', avatarUpload, addUserValidators, addUserValidationHandler)

module.exports = router;
