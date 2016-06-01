

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});


var server = app.listen(3000, function() {
    var port = server.address().port;

    console.log('Express is listening on port %s', port);
});
