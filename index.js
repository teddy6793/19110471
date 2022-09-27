const express = require('express');
const app = express();
const PORT = 5000;



const mygroupReq = require('./routes/routes.all');
const mymessageReq = require('./routes/routes.message');
const myidReq = require('./routes/routes.myid');

app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});



app.use('/', mygroupReq);
app.use('/19110471',myidReq);
app.use('/message', mymessageReq);

app.listen(PORT);