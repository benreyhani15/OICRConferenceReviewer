var express = require('express');
var router = express.Router();
var Review = require('../models/conference_review');
var reviewLandpageURL = 'http://localhost:3000/';

 /* GET new review page. */
router.get('/new', function(req, res) {
  res.render('new_review');
});

router.get('/',function(req,res){
	Review.find(function(err,reviews){
		res.send(reviews);
	});
});

router.post('/addReview', function(req,res){
	var date = req.body.date;
	var conferenceMonth = date.substring(date.lastIndexOf("-"),date.length - 1);
	var conferenceYear = date.substring(0,date.lastIndexOf("-"));
	var tmpReview = new Review({
      conference_attendee : req.body.attendee,
      conference_attendee_department: req.body.department,
      conference_name : req.body.conference,
      conference_year : conferenceYear,
      conference_month : conferenceMonth,
      conference_city : req.body.city,
      conference_duration : req.body.duration,
      area_of_focus : req.body.area_of_focus,
      is_recommended : req.body.recommendradio,
      recommended_reason : req.body.justification,
      conference_summary : req.body.mSummary,
      conference_contacts : req.body.collaborators,
      conference_comments : req.body.comments,
      conference_rating : req.body.rating

	}).save(function(error){
		if (error){
			res.send('error saving review to DB ');
		}
		else {
			console.log('saved to DB');
			res.redirect(reviewLandpageURL);
		}
	});
});
module.exports = router;
