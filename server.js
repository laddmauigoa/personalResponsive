var express = require('express');
var bodyParser = require('body-parser');
var port = 8888;

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))


app.listen(port, function() {
	console.log('listening to ' + port)
});