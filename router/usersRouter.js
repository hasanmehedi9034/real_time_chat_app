const express = require('express')


// internal imports
const { getUsers } = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')


const router = express.Router();


// Login Page
router.get('/', decorateHtmlResponse('user'), getUsers);

router.post

module.exports = router;
