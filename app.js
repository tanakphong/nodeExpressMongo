var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('Please use /api/books or /api/genres');
});

app.listen(3000);
console.log('Running on port 3000...');