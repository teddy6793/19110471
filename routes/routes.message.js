const express = require('express');
const {messageRequest,messageRequestNoneId} = require('../controllers/controllers.messagecontroller');

const router = express.Router();


router.get('/:ID',messageRequest)
router.get('/',messageRequestNoneId)
module.exports = router