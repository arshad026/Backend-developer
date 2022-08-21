const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let data = req.body

    let authorIsNot = data.author
    if (!authorIsNot) {
        res.send({ status: false, msg: "Author id is mandatory" })
    }
    let authorId = await authorModel.findById(authorIsNot)
    if (!authorId) {
        res.send({ status : false, msg : "This author id does not valid"})
    }
    let publisherIsNot = data.publisher
    if (!publisherIsNot) {
        res.send({ status: false, msg: "Publisher id is mandatory" })
    }
    let publisherId = await publisherModel.findById(publisherIsNot)
    if(!publisherId){
        res.send({ status : false, msg : "This publisher id does not valid"})
    }
    let savedData = await bookModel.create(data)    
    res.send({ msg: savedData })
}


const getAllBook = async function(req, res){
    let allBook = await bookModel.find().populate(['author','publisher'])
    res.send({msg : allBook})
}



const updateBook= async function (req, res) {
    let allbooks= await bookModel.updateMany( 
        { publisher: {$in :['Penguin' ,'HarperCollins']}}, 
        { $set: {isHardCover: true} } )
     res.send( { msg: allbooks})
}



const updatePrice = async function(req,res){
    let objectId = await authorModel.find({rating:{$gt:3.5}})
    let updatedPrice = await bookModel.updateMany(
        {author: {$in: objectId}}, 
        {$inc: {price : +10}})
    res.send({msg : updatedPrice})
}


module.exports.createBook = createBook
module.exports.getAllBook = getAllBook
module.exports.updateBook = updateBook
module.exports.updatePrice = updatePrice