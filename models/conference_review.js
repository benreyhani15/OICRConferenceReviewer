var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conferenceReviewSchema = new Schema({
	conference_attendee : String,
	conference_attendee_department: String,
	conference_name : String,
	conference_year : Number,
	conference_month : Number,
	conference_city : String,
	conference_duration : Number,
	area_of_focus : String,
	is_recommended : Boolean,
	recommended_reason : String,
	conference_summary : String,
	conference_contacts : String,
	conference_comments : String,
	conference_rating : Number
});
module.exports = mongoose.model('Review', conferenceReviewSchema);
