const Anime = require('../models/animeModels');

const animeController = {};

animeController.getShow = (req, res, next) => {
  Anime.find({}, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.locals.getShow = data;
      return next();
    }
  });
};

animeController.postShow = (req, res, next) => {
  const { show, watched } = req.body;
  if (!show || !watched) return next('Please fill input fields');
  Anime.create({ show, watched }, (err, data) => {
    if (err) return next(err);
    return next();
  });
};

animeController.deleteShow = (req, res, next) => {
  Anime.findById(req.params.id)
    .then((data) => data.remove())
    .catch((err) => res.status(404));
};

module.exports = animeController;
