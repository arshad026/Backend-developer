const express = require('express');
const abc = require('../introduction/intro')
const first = require('../logger/logger')
const second = require('../util/helper')
const third = require('../validator/formatter')
const lodash = require('lodash');
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    first.welcome()
    second.printDate()
    second.printMonth()
    second.getBatchInfo()
    third.trim()
    third.lower()
    third.upper()
    let arr =['january','february','march','april','may','june','july','august','september','october','november','december']
    let result = lodash.chunk(arr,3)
    console.log(result)
    let arr1 = [1,3,5,7,9,11,13,15,17,19]
    let result1 = lodash.tail(arr1)
    console.log(result1)
    let arr2 = [1,2,2,4,3,1]
    let result2 = lodash.union(arr2)
    console.log(result2)
    let arr3 = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let result3 = lodash.fromPairs(arr3)
    console.log(result3)
    res.send('My second ever api!')
});

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason