const router = require('express').Router();
let News = require('../models/news.model');

router.route('/').get((req, res) => {
  News.find()
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;
 
  const date = Date.parse(req.body.date);

  const newNews = new News({
    username,
    title,
    description,
    date,
  });

  newNews.save()
  .then(() => res.json('News added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  News.findById(req.params.id)
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  News.findByIdAndDelete(req.params.id)
    .then(() => res.json('News deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  News.findById(req.params.id)
    .then(news => {
      news.username = req.body.username;
      news.title = req.body.title;
      news.description = req.body.description;
      news.date = Date.parse(req.body.date);

      news.save()
        .then(() => res.json('News updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;