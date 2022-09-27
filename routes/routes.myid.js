const express = require('express');
const {myidRequest,addFriendID} = require('../controllers/controllers.myidcontroller');

const router = express.Router();

router.post('/',addFriendID)
router.get('/:friendID', myidRequest)
module.exports = router