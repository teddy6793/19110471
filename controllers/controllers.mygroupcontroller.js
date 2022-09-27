const {mygroup} = require('../models/models.mygroup');

function mygroupRequest (req, res) {
    res.status(200).json(mygroup);
}


module.exports = {
    mygroupRequest
}