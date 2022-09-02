//const { query } = require('express');
const express = require('express');
const router = express.Router();
const cowinController = require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memeController = require("../controllers/memeController")


router.get('/test-me', function(req, res){
    res.send("My first api!")
})


router.get('/cowin/states', cowinController.getStates)

router.get('/cowin/districtsInState/:stateId', cowinController.getDistricts)

router.get('/cowin/getById', cowinController.vaccinationCentre)

router.get('/getWeather', weatherController.getWeather)

router.get('/tempOfLondon', weatherController.tempOfLondon)

router.get('/getSortedCities', weatherController.getSortedCities)

router.get('/getAllTheMemes', memeController.getAllTheMemes)

router.post('/createMeme', memeController.createMeme)



module.exports = router;