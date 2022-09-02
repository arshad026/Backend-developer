const axios = require('axios')


const getAllTheMemes = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


const createMeme = async function (req, res) {
    try {
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let user = req.query.username
        let pass = req.query.password

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${user}&password=${pass}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


module.exports.getAllTheMemes = getAllTheMemes
module.exports.createMeme = createMeme