// PROD DB URL
var dbUrl = "mongodb://PnUNoXnxdsxT:dfEVbcHFAFmw@mongosoup-cont002.mongosoup.de:31516/cc_PnUNoXnxdsxT";

// DEV URL
// var dbUrl = "greyhound"

var collections = ["videos", "links"];

var db = require("mongojs").connect(dbUrl, collections);
module.exports = db;
