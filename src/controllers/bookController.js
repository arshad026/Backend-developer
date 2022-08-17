const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {
    let allBooks = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}


const getBooksInYear = async function (req, res) {
    let newYear = req.body.year
    let allBooks = await bookModel.find({ year: { $eq: newYear } })
    res.send({ msg: allBooks })
}



const getParticularBooks = async function (req, res) {
    let body = req.body
    let specificBooks = await bookModel.find(body)
    res.send({ msg: specificBooks })
}


const getXINRBooks = async function (req, res) {
    let allBooks = await bookModel.find({ "prices.indianPrice": { $in: ["RS 100", "RS 200", "RS 500"] } })
    res.send({ msg: allBooks })
}


const getRandomBooks = async function (req, res) {
    let allBooks = await bookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ msg: allBooks })
}



module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks