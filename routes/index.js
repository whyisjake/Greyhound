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
		console.log(video);
		res.render('single', {
			post: video
		});
	});
};