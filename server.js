const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const books = require('./routes/api/books')

const app = express();


// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys'). mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/books', books)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log( "Server started on port" + port));