const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');

router.get('/:id', (req, res)=>{
    console.log(req.params.id);
    Photo.findById(req.params.id, (error, image) =>{
        if (error){
            console.log(error);
        } else {
            console.log(image);
            res.render('singleImage', {
                image:image
            })
        }
    })
});

router.put('/:id', (req, res)=>{
    console.log("ID: " + req.params.id)
    console.log("Body: " + req.body)
})

module.exports = router;