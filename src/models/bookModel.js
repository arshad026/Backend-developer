const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
   
    bookName : String,
    author_id : Number,
    prices : Number,
    ratings : Number

}, {timestamps : true} );


module.exports = mongoose.model('book-data', bookSchema)