const axios = require('axios')


const getWeather = async function (req, res) {
    try {
        let name = req.query.q
        let key = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


const tempOfLondon = async function (req, res) {
    try {
        let name = req.query.q
        let key = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({ status: true, temp: data })
    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


const getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []

        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d70afc2e0c7b1b9002380688ad43f90a`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function(a, b){return a.temp - b.temp})
        res.status(200).send({ status: true, msg: sorted })

    } catch (err) {
        res.status(500).send({ Error: err.message })
    }
}




module.exports.getWeather = getWeather
module.exports.tempOfLondon = tempOfLondon
module.exports.getSortedCities = getSortedCities