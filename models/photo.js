const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
var PhotoSchema = new Schema({
    name: String,
    path: String,
    size: Number,
    date: {
        type: Date,
        default: Date()
    }
});

//Schema to model
let Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;