const {mygroup} = require('../models/models.mygroup');

function messageRequestNoneId(req,res){
    const ID = req.params.ID;
    console.log(typeof(ID));
    console.log("id la"+ ID);
    if (isNaN(ID)) {
        res.setHeader('Content-Type','text/html');
        var templateString = '<html><body><ul>';
        console.log(templateString+'</ul></body></html>');
        if (mygroup.length > 0) {
            mygroup.forEach(element => {
                templateString+='<li>'+element.name+'</li>'; 
            }); 
        } else {
            templateString+='Not valid';
        }
        console.log(templateString+'</ul></body></html>');
        res.write(templateString+'</ul></body></html>');
        
    }
    res.end();
}

function messageRequest (req,res) {
    const ID = req.params.ID;
    console.log(typeof(ID));
    console.log("id la"+ ID);
    if (isNaN(ID)) {
        res.setHeader('Content-Type','text/html');
        var templateString = '<html><body><ul>';
        console.log(templateString+'</ul></body></html>');
        if (mygroup.length > 0) {
            mygroup.forEach(element => {
                templateString+='<li>'+element.name+'</li>'; 
            }); 
        } else {
            templateString+='Not valid';
        }
        console.log(templateString+'</ul></body></html>');
        res.write(templateString+'</ul></body></html>');
        
    }
    else {
        const friend = mygroup.find(item => item.id == parseInt(ID));
        if (friend) {
            console.log(friend.name);
            res.write(`<html><body><ul><li>${friend.name}</li></ul></body></html>`);
        } else {
            res.write('<html><body>Not valid</body></html>');
        }
    }
    res.end();
}

module.exports = {
    messageRequest,
    messageRequestNoneId
}