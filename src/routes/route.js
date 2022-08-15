const { query } = require('express');
const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")


router.post('/createBook', bookController.createBook)

router.get('/getBookData', bookController.getBookData)


module.exports = router;
// adding this comment for no reason