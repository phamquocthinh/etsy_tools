import express from 'express';

let router = express.Router();

router.route('/')
  .get((req, res) => res.redirect('/item'))

module.exports = router;
