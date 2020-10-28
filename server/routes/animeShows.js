const Anime = require('../models/animeModels');
const express = require('express')
const router = express.Router();



// get request


// Finds and displays all shows in data base in json
router.get('/', (req, res) => {
    Anime.find()
        .then(shows => {
            res.json(shows)
        })
})

router.post('/', (req, res, next) => {
    const { show } = req.body;
    if (!show) return next("Please fill input fields");
    Anime.create({ show })
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.render({ error: err })
        })
})


module.exports = router;