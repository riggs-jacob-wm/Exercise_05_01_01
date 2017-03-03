/* Author: Jacob Riggs
   March 2, 2017
   server.js

   Purpose: The basis for the back end

   3/2/17 - JNR - Got the server to be able to run
   3/3/17 - JNR - Added the post functionality. Put in an endpoint for message postings.

*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

app.use(bodyParser.json());

app.post('/api/message', function(req, res) {
    console.log(req.body);
    res.status(200);
});

var server = app.listen(port, function() {
    console.log('Server listening on localhost:%s', port);
});