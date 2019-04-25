import express from 'express';

let router = express.Router();

router.route('/')
  .get((req, res) => res.redirect('/product'))

module.exports = router;
