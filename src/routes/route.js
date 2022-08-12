const { query } = require('express');
const express = require('express');
const router = express.Router();
const UserModel = require("../models/useModel.js")
const userController = require("../controllers/userController")


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
    if (isNameRepeated) {
        res.send('This player was already added!')
    }
    else {
        players.push(player)
        res.send(players)

    }
});


let persons = [
    {
        name: "PK",
        age: 10,
        votingstatus: false
    },
    {
        name: "Sk",
        age: 20,
        votingstatus: false
    },
    {
        name: "AA",
        age: 70,
        votingstatus: false
    },
    {
        name: "SC",
        age: 5,
        votingstatus: false
    },
    {
        name: "HQ",
        age: 40,
        votingstatus: false
    }
]

router.post('/person', function (req, res) {
    let votingAge = req.query.votingAge
    let result = []

    for (i = 0; i < persons.length; i++) {
        if (persons[i].age > votingAge) {
            persons[i].votingstatus = true
            result.push(persons[i])
        }
    }
    res.send({ data : result, status : true })
})



router.post('/userCreate', userController.userCreater)

router.get('/getUsersData', userController.getUserData)

module.exports = router;
// adding this comment for no reason