const express = require('express');
const router = express.Router();
const upload = require('../upload');

router.get('/', (req,res)=>{
    res.render('index');
})

// route to handle image upload
router.post('/upload', (req,res)=>{
    upload(req, res, (err)=>{
        if (err){
            console.log(err)
            res.render('index', {msg: err})
        }else if(req.file === undefined){
            res.render('index', {msg: 'Error: No file selected!!'})
        }else{
            res.render('index', {file: 'images/' + req.file.filename})
        }
    })
})

module.exports = router;