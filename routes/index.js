const express = require('express');
const router = express.Router();
const upload = require('../upload');
const Photo = require('../models/photo');

router.get('/', (req,res)=>{
    Photo.find({}, (error, images) => {
        if(error){
            console.log(error);
        } else {
            res.render('index', {
                images:images,
                msg: req.query.msg
            });
        }
    });
});

// route to handle image upload
router.post('/upload', (req,res)=>{
    upload(req, res, (err)=>{
        if (err){
            console.log(err)
            res.render('index', {msg: err})
        }else if(req.file === undefined){
            res.render('index', {msg: 'Error: No file selected!!'})
        }else{
            //res.render('index', {file: 'images/' + req.file.filename})

            //Create Photo
            let newPhoto = new Photo({
                name: req.file.filename,
                path: 'images/' + req.file.filename,
                size: req.file.size
            })

            //Save
            newPhoto.save()
            res.redirect('/?msg=File Uploaded successfully');
        }
    })
});

module.exports = router;