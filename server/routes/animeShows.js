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

// Posts content to mongoDB
router.post('/', (req, res, next) => {
    const { show, watched } = req.body;
    if (!show || !watched) return next("Please fill input fields");
    Anime.create({ show, watched })
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.render({ error: err })
        })
})

// Delets data from MongoDB
router.delete('/:id', (req, res, next) => {
    Anime.findById(req.params.id)
        .then(data => data.remove())
        .catch(err => res.status(404))
})


module.exports = router;