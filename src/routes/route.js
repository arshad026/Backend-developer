const { query } = require('express');
const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")


router.get('/test-me', function(req, res){
    res.send("My first api!")
})


router.post('/createBook', bookController.createBook)

router.get('/bookList', bookController.bookList)

router.get('/getBooksInYear', bookController.getBooksInYear)

router.get('/getParticularBooks', bookController.getParticularBooks)

router.get('/getXINRBooks', bookController.getXINRBooks)

router.get('/getRandomBooks', bookController.getRandomBooks)


module.exports = router;