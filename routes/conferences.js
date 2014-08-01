var express = require('express');
var router = express.Router();
var Review = require('../models/conference_review');
var reviewLandpageURL = 'http://localhost:3000/';

router.get('/:name', function(req, res){
	console.log(req.params.name)
	Review.find({'conference_name':req.params.name}, function(err, reviewData){
		console.log(reviewData);
		var numOfEntries = 0;
		var totalRating = 0;
		reviewData.forEach(function(data) {
			numOfEntries += 1;
			totalRating += data.conference_rating;
			console.log(data);
		});
		console.log(totalRating);
		console.log(numOfEntries);
		console.log(totalRating/numOfEntries);
		res.render('conference', {reviews: reviewData, conferenceName: req.params.name, averageRating: Math.round(totalRating*100/numOfEntries)/100});
	});
});

module.exports = router;