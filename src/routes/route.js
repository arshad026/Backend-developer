const { query } = require('express');
const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel")
const UserController = require("../controllers/userController")


router.post('/createBook', UserController.createBook)

router.get('/getBookData', UserController.getBookData)

module.exports = router;
// adding this comment for no reason