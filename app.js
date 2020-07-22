// Import express package
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

let indexRouter = require('./routes/index');
let imageRouter = require('./routes/image')

//Connecting to DB
let mongoUrl = 'mongodb://localhost:27017/';
let dbName = 'darkroom';
mongoose.connect(mongoUrl + dbName, { useNewUrlParser: true });
let db = mongoose.connection;

//Test Connection
db.once('open', ()=>{
    console.log('Database connected successfully');
});

//Test Connection Error
db.on('error', (error)=>{
    console.log(error);
});

// Initiliaze express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');


// Set a static folder
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(express.json());``

// Define the index router
app.use('/', indexRouter);
app.use('/image', imageRouter);


// Define the port number
const PORT = 5002;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});