const express = require('express');
const abc = require('../introduction/intro')
const first = require('../logger/logger')
const second = require('../util/helper')
const third = require('../validator/formatter')
const lodash = require('lodash')
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
   // let arr =['january','february','march','april','may','june','july','august','september','october','november','december']
    res.send('My second ever api!')
});

router.get('/cohort-member', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get ('/student-name', function(req, res){
    let name = ['Arsh','Azad','Saif']
    res.send(name)
})

router.get ('/student-name/arsh', function(req, res){
    let fullName = 'ARSHAD ASLAM'
    res.send(fullName)
})

router.get('/students-details/Sabiha', function (req, res){
    let details = "Sabiha Khan"
    res.send (details)
})

router.get('/students-details/:name', function (req, res){
    console.log("This is the request" + JSON.stringify(req.params))
    let reqParams = req.params
    let studentsName = reqParams.name
    console.log('Name of the students is', studentsName)
    //assuming details is firstName
    let studentDetails = studentsName + " " + studentsName
    
    res.send (studentDetails)
})


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason