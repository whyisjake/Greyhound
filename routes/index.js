var db = require("../database.js");

exports.index = function(req, res) {
	res.render('index', {
		title: 'Greyhound'
	});
};


// Let's start the videos.
exports.videos = {};
/*
 * GET all videos
 */
exports.videos.all = function(req, res) {
	db.videos.find(function(err, videos) {
		if(err) return;
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
	res.json(req.body);
	db.videos.save(req.body);
};

exports.video = function(req, res) {
	db.videos.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, video) {
		if(err) return;

		var EMBEDLY_KEY = 'f8fe2d9f411b4bac9d6b89454b1c4ebc';

		var embedly = require('embedly'),
			util = require('util');

		var myObj;

		new embedly({key: EMBEDLY_KEY}, function(err, api) {

			// call single url
			var url = video.url;
			obj = api.oembed({url: url}, function(err, objs) {

				video.embed = objs[0].html;
				console.log(video.embed);
				res.render('single', {
					post: video
				});
			});

		});
	});
};