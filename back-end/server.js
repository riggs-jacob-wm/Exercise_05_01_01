/* Author: Jacob Riggs
   March 2, 2017
   server.js

   Purpose: The basis for the back end

   3/2/17 - JNR - Got the server to be able to run
   3/3/17 - JNR - Added the post functionality. Put in an endpoint for message postings.
   Take care of the CORES errors

   3/6/17 - JNR - Added MongoDB support.
   3/8/17 - JNR - Added the Message variable to implement Mongoose
   3/9/17 - JNR - Implemented an endpoint to retrieve messages from MongoDB

*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var mongo = require('mongodb').MongoClient;
var port = 8080;

var Message = mongoose.model('Message', {
    msg: String
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get('/api/message', getMessages);

app.post('/api/message', function(req, res) {
    console.log(req.body);

    //database.collection('messages').insertOne(req.body);
    var message = new Message(req.body);
    message.save();

    res.status(200);
});

function getMessages(req, res) {
    Message.find({}).exec(function(err, result) {
       res.send(result);
    });
}

mongoose.connect('mongodb://localhost:27017/test', function(err, db) {
    if (!err) {
        console.log('Connected to MongoDB');
    }
});

var server = app.listen(port, function() {
    console.log('Server listening on localhost:%s', port);
});