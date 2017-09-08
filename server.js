var express = require('express');
var app = express();

app.use(express.static('src'));

var PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
	console.log("listening on "+PORT)
});