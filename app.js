const express = require('express');
const upload = require('./upload');

const app = express();

app.get('/', (req, res)=>{
    res.render('index');
});

app.post('/upload', (req, res) =>{
    upload((req, res,err) =>{
        if(err){
            console.log(err);
        } else {
            console.log(req.file);
            res.send('test');
        }
    })
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

const PORT = 5000;

app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`)
});