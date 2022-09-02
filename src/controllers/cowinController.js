const axios = require('axios')


let getStates = async function (req, res) {

    let options = {
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({ status: true, msg: data })

}


let getDistricts = async function (req, res) {

    let id = req.params.stateId
    let options = {
        method: 'get',
        url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({ status: true, msg: data })

}

const vaccinationCentre = async function (req, res) {
    try {
        let id = req.query.districtId
        let date = req.query.date
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    } catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}





module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.vaccinationCentre = vaccinationCentre