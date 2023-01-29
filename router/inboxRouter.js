const express = require('express')


// internal imports
const { getInbox } = require('../controller/inboxController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')



const router = express.Router();


// inbox Page
router.get('/', decorateHtmlResponse('inbox'), getInbox);

module.exports = router;
