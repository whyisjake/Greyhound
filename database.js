var dbUrl = "mongodb://PnUNoXnxdsxT:dfEVbcHFAFmw@mongosoup-cont002.mongosoup.de:31516/cc_PnUNoXnxdsxT";
var collections = ["videos", "links"];

var db = require("mongojs").connect(dbUrl, collections);
module.exports = db;
