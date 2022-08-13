const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
   
    bookName : String,
    authorName : String,
    category :{
        type : String,
        unique : true,
        required : true,
    },
    year : Number,

}, {timestamps : true});

module.exports = mongoose.model('book', bookSchema) //users