var db = require("../database.js");
var embedly = require('embedly');
var util = require('util');
var request = require('request');
var Q = require('q');
var deferred = Q.defer();

exports.index = function(req, res) {
	res.render('index', {
		title: 'Greyhound'
	});
};

exports.submit = function(req, res) {
	res.render('submit');
};

// Let's start the videos.
exports.reddit = {};

/*
 * GET collection of videos from one subreddit
 */
exports.reddit.one = function(req, res) {

	// Let's set some things up.
	var slug = req.params.slug,
		endpoint = 'http://reddit.com/r/',
		url = endpoint + slug + '.json';
	var return_posts = [];

	// Q.fcall(
		request(
			{ url: url, json: true },
			function( error, response, body ) {

				// Setup some vars
				var posts = body.data.children;

				res.json( posts );

				// Loop through each item, add the videos to the database,
				// and then put them in the new array, and send them all back.
				for ( var i = posts.length - 1; i >= 0; i-- ) {
					// What's the name here?
					// console.log( posts[i].data.media_embed );

					// Since we are getting an object back, with an ID,
					// let's use that as the global identifier.
					posts[i].data._id = posts[i].data.id;

					// If we have something to embed, let's get it.
					if ( typeof posts[i].data.media_embed.content != 'undefined' && posts[i].data.media_embed.content.length > 0 ) {

						// And save the object to the db.
						db.videos.save( posts[i].data, function(err, doc){
							// console.log(err);
							// console.log(doc);
							return_posts.push(doc);
						})
					} else {
						console.warn( 'Skipped: ' + posts[i].data.title );
					}
				}
			}
		)
	// )
	// .then( console.log( return_posts ) )
	// .done( res.json(return_posts) );

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
	db.videos.findOne({ "_id" : req.params.id }, function(err, video) {
		console.log(video);
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
	db.videos.findOne({ "_id" : req.params.id }, function(err, video) {

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

				video.embed = objs[0];

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