const express = require('express'); // capabilities of express
const db = require('../database/index'); // connect to connection/ db
const router = require('./routes')
const bodyParser = require('body-parser'); // npm install body-parser

const app = express();
const port = 1128;

app.use(express.static('./client/dist'))
app.use(bodyParser.json()) // middleware
app.use('/', router);

app.listen(port, (err) =>{
    if(err){
        console.log("Server is not listening")
    }else{
        console.log("Server is listening on port ", port);
    }
})

