const { query } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})


router.get('/sol1', function(req, res){
    let arr = [1,2,3,5,6,7]
    let total = 0
    for (var i in arr){
        total += arr[i];
    }

    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit + 1)/2
    let missingNumber = consecutiveSum - total

    res.send({data : missingNumber})

});


 router.get('/sol2', function(req,res){
    let arr = [33,34,35,37,38]
    let len = arr.length
    let total = 0
    for (var i in arr){
        total += arr[i]
    }
    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit ) / 2
    let missingNumber = consecutiveSum - total
    res.send ({data : missingNumber});

 });


router.get('/movie', function (req, res) {
    let movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movie)
});



router.get('/movies/:indexNumber', function (req, res) {
    let movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let i = req.params.indexNumber
    if (i < 0 || i >= movie.length) {
        return res.send('The index value is incorrect')
    }
    let result = movie[i]
    res.send(result)
});



router.get('/film', function (req, res) {
    let arr = [
        {
            'id': 1,
            'name': 'Rang de basanti'
        },
        {
            'id': 2,
            'name': 'The shining'
        },
        {
            'id': 3,
            'name': 'Lord of the rings'
        },
        {
            'id': 4,
            'name': 'Batman begins'
        }
    ]
    res.send(arr)
});



router.get('/films/:filmId', function (req, res) {
    let filmName = [
        {
            'id': 1,
            'name': 'The Shining'
        },
        {
            'id': 2,
            'name': 'Incendies'
        },
        {
            'id': 3,
            'name': 'Rang de Basanti'
        },
        {
            'id': 4,
            'name': 'Finding Nemo'
        }
    ]
    let filmId = req.params.filmId

    for (i = 0; i < filmName.length; i++) {
        let film = filmName[i]
        if (film.id == filmId) {
            return res.send(film)
        }
    }
    res.send("The film id doesn't match any movie")
});


module.exports = router;
// adding this comment for no reason