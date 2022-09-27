const {mygroup} = require('../models/models.mygroup');

function myidRequest (req, res) {
    const ID = Number(req.params.friendID);
    
    const friend = mygroup.find(item => item.id == ID);

    if (friend) {
        res.status(200).json(friend);
    }
    else {
        res.status(400).json({error:'not valid'});
    }
}

function addFriendID(req,res) {
    console.log(`${req.body}`);
    const ID = req.body.id;
    if (ID == '19110471' || ID == '19110420' || ID == '19110355') {
        const friend = mygroup.find(item => item.id == parseInt(ID));
        if (friend) {
            return res.status(400).json({
                error:'Not valid'
            });
        } else {
            const friend = {id:req.body.id, name: req.body.name};
            mygroup.push(friend);
            res.status(200).json(friend);
        }
        
    } else {
        return res.status(400).json({
            error:'Not valid'
        });
    }
}
// app.post('/19110471',((req,res)=> {
//     console.log(`${req.body}`);
//     const ID = req.body.id;
//     if (ID == '19110471' || ID == '19110420' || ID == '19110355') {
//         const friend = mygroup.find(item => item.id == parseInt(ID));
//         if (friend) {
//             return res.status(400).json({
//                 error:'Not valid'
//             });
//         } else {
//             const friend = {id:req.body.id, name: req.body.name};
//             mygroup.push(friend);
//             res.status(200).json(friend);
//         }
        
//     } else {
//         return res.status(400).json({
//             error:'Not valid'
//         });
//     }
    
// }))

module.exports = {
    myidRequest,
    addFriendID
}