var db = require("../database.js");
var embedly = require('embedly');
var util = require('util');

exports.index = function(req, res) {
	res.render('index', {
		title: 'Greyhound'
	});
};

exports.submit = function(req, res) {
	res.render('submit');
};


// Let's start the videos.
exports.videos = {};
/*
 * GET all videos
 */
exports.videos.all = function(req, res) {
	db.videos.find(function(err, videos) {
		if(err) {
			return;
		}

		res.json(videos);
	});
};

/*
 * GET one video
 */
exports.videos.one = function(req, res) {
	db.videos.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, video) {
		if(err) return;
		res.json(video);
	});
};

/*
 * POST a new player
 */
exports.videos.create = function(req, res) {
	db.videos.save(req.body, function(err, doc){
		res.json(doc);
	});
};

exports.video = function(req, res) {
	db.videos.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, video) {

		if (video.embed) {
			res.render('single', {
				post: video
			});
		}

		if(err) return;

		var EMBEDLY_KEY = 'f8fe2d9f411b4bac9d6b89454b1c4ebc';

		var myObj;

		new embedly({key: EMBEDLY_KEY}, function(err, api) {

			// call single url
			var url = video.url;

			obj = api.oembed({url: url}, function(err, objs) {

				video.embed = objs[0].html;

				// Did we get the embed?
				console.log(video.embed);

				// Let's update the DB with the embed.ly info.
				db.videos.save(video);

				res.render('single', {
					post: video
				});
			});

		});
	});
};