var express = require('express');
var router = express.Router();
var Review = require('../models/conference_review');
var async = require('async');

/* GET home page. */
router.get('/', function(req, res) {
  async.parallel([
  	function(callback){
  		Review.find({conference_year:2014},function(err,reviews){
  			callback(err,reviews);
  		});
  	},
  	function(callback){
  		Review.find({conference_year:2013},function(err,reviews){
  			callback(err,reviews);
  		});
  	},
  	function(callback){
  		Review.find({conference_year:2012},function(err,reviews){
  			callback(err,reviews);
  		});
  	}
  	],
  	function(err,reviewsArray){
      res.render('index', { title: 'OICR Conferences', reviews:reviewsArray});
  	});
});
module.exports = router;
