const express = require('express');
const {mygroupRequest} = require('../controllers/controllers.mygroupcontroller');

const router = express.Router();


router.get('/', mygroupRequest);

module.exports = router