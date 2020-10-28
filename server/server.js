const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const shows = require('./routes/animeShows')

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Specify port
const PORT = 5000;


// User Routes

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../src/index.html'));
// });

app.use('/', shows)

app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});


// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

