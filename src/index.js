const express = require('express');
var bodyParser = require('body-parser');
const { default : mongoose } = require('mongoose');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://arsh26:rn43mNePN23BJZwy@cluster0.24hhkez.mongodb.net/arsh-26?retryWrites=true&w=majority", {
    useNewUrlParser : true
})
.then( () => console.log("MongoDB is connected"))
.catch ( err => console.log(err) )


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
