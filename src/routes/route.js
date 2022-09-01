//const { query } = require('express');
const express = require('express');
const router = express.Router();
const cowinController = require("../controllers/cowinController")


router.get('/test-me', function(req, res){
    res.send("My first api!")
})


router.get('/cowin/states', cowinController.getStates)

router.get('/cowin/districtsInState/:stateId', cowinController.getDistricts)

router.get('/cowin/getById', cowinController.vaccinationCentre)


module.exports = router;