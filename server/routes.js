const router = require('express').Router();
const db = require('../database/index');

router.get('/cows', (req, res) =>{
    db.query("SELECT * FROM cowList", (err, result) => {
        if(err){
            res.sendStatus(404);
        }else{
            res.status(200).json(result);
        }
    })
})


router.post('/cows', (req, res) => {
    let cow = req.body // properties have to be same as in client's
    db.query("INSERT INTO cowList (name, description) VALUES (?, ?)", [cow.name, cow.description],(err, result) => {
        if(err){
            res.sendStatus(500);
        }else{
            res.sendStatus(201);
        }
    })
})
module.exports = router;
