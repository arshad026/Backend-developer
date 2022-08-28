const jwt = require('jsonwebtoken')


const validation = async function(req,res,next){

    let token = req.headers["x-auth-token"]
    if (!token) {
        return res.send({ status: false, msg: "token is mandatory" })
    }
    let decode = await jwt.verify(token, "arsh-plutonium")
    if (!decode) {
        return res.send({ status: false, msg: "This token is not valid" })
    }

    // let userId = req.params.userId
    // let userDetails = await userModel.findById(userId)
    // if (!userDetails) {
    //     return res.send({ status: false, msg: "userId does not exist!" })
    // }
    else {
        next()
    }
}


module.exports.validation = validation