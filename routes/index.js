var express = require('express');
var router = express.Router();
var Review = require('../models/conference_review');
var async = require('async');
var url = require('url');

/* GET home page. */

router.get('/getReviews/:year',function(req,res){
	var year = req.params.year;
	Review.find({conference_year:year}).distinct('conference_name',function(err, conferences){
		console.log(conferences);
		res.send(conferences);
	});
});

router.get('/', function(req, res) {
  var JSONArray = [];
  async.series([
  	function(callback){
  		Review.distinct('conference_year',{},function(err,conferenceYears){
  			callback(err,conferenceYears.sort(function(a, b){return b-a}));
  		})
  	}],

  	function(err,years){
  		var allYears;
  		console.log(years);
  		if (err){
  			console.log('there was error');
  		}
  		else {
  		  allYears = years[0];
  		  async.each(allYears,
  		  	function(year,callback){
  		  		Review.find({'conference_year': year}, function(err,reviews){
  		  		  JSONArray.push(reviews);
  		  	      callback(err);
  		  		});
  		  },
  		  function(err){
  		  	console.log(allYears);
  		  	res.render('index', {reviews:JSONArray, years:allYears});
  		  });
  		}
  });
});
module.exports = router;
