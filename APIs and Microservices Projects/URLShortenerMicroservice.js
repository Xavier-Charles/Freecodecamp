"use strict";

var express = require("express");
var mongo = require("mongodb");
var mongoose = require("mongoose");
var dns = require("dns");
var bodyParser = require("body-parser");

var cors = require("cors");

var app = express();

// Basic Configuration
var port = process.env.PORT || 3000;

/** this project needs a db !! **/

// mongoose.connect(process.env.DB_URI);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var Schema = mongoose.Schema;

var UrlDbSchema = new Schema({
    original_url: { type: String, required: true },
    short_url: Number
});

var UrlDb = mongoose.model("UrlDb", UrlDbSchema);

function createEntry(oUrl, len, done) {
    var entry = UrlDb({
        original_url: oUrl,
        short_url: len
    });
    entry.save((err, data) => {
        if (err) return done(err);
        done(null, data);
        // return data
    });
    return entry;
}


app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
    res.sendFile(process.cwd() + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
    res.json({ greeting: "hello API" });
});

//Url shortner {"original_url":"www.google.com","short_url":1}
// {"error":"invalid URL"}
app.post("/api/shorturl/new", function (req, res) {
    console.log(req.body);
    //ceck for valid url
    let n = new URL(req.body.url);
    dns.lookup(n.hostname, async (err, add, fam) => {
        if (err) {
            res.json({ error: "invalid URL" });
        } else {
            var len = await UrlDb.collection.countDocuments();

            // create entry
            var r = createEntry(req.body.url, len, console.log);

            // send back result
            res.json({ original_url: req.body.url, short_url: len });
        }
    });
});

app.listen(port, function () {
    console.log("Node.js listening ...");
});
