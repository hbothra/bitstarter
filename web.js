var express = require('express');
var fs = require('fs');
var app = express();
var fileBuffer = fs. readFileSync('index.html'); 
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(''+fileBuffer.toString())
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
