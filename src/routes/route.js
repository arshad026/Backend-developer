const { query } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]


router.post('/players-name', function (req, res) {
    let player = req.body
    let playerName = req.body.name
    let isNameRepeated = false

    for (i = 0; i < players.length; i++) {
        if (players[i].name == playerName) {
            isNameRepeated = true
            break;
        }
    }
    if(isNameRepeated){
        res.send ('This player was already added!')
    }
    else{
        players.push(player)
        res.send(players)

    }
})


module.exports = router;
// adding this comment for no reason