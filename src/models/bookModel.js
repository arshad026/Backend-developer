const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
   
    bookName : {
        type : String,
        required : true
    },
    authorName : String,
    prices : {
        indianPrice : String,
        europeanPrice : String
    },
    year : Number,
    tags : [ String ], 
    stockAvailable : Boolean,
    totalPages : String

}, {timestamps : true} );

module.exports = mongoose.model('book', bookSchema)