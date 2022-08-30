const jwt = require('jsonwebtoken')


const validation = async function(req,res,next){
try{
    let token = req.headers["x-auth-token"]
    if (!token) {
        return res.send({ status: false, msg: "token is mandatory" })
    }
    let decode = jwt.verify(token, "arsh-plutonium")
    if (!decode) {
        return res.send({ status: false, msg: "This token is not valid" })
    }
    let userToBeModified = req.params.userId
    let userLoggedIn = decode.userId
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    next()
}
catch(err){
    res.status(500).send({Error: err.message})
}};


module.exports.validation = validation