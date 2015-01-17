var dbUrl = "greyhound";
var collections = ["videos", "links"];

var db = require("mongojs").connect(dbUrl, collections);
module.exports = db;
