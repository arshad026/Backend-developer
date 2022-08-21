const { query } = require('express');
const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")
const bookController = require("../controllers/bookController")


router.get('/test-me', function(req, res){
    res.send("My first api!")
})


router.post('/createAuthor', authorController.createAuthor)

router.post('/createPublisher', publisherController.createPublisher)

router.post('/createBook', bookController.createBook)

router.get('/getAllBook', bookController.getAllBook)

router.put('/updateBook', bookController.updateBook)

router.put('/updatePrice', bookController.updatePrice)


module.exports = router;