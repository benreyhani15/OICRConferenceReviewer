var express = require('express');
var router = express.Router();
var Report = require('../models/conference_review');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
