var express = require('express');
var hbs = require('hbs');
var getBooks = require('getbooks');

var app = express();

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.static('public'));

app.get('/', function(req, res){
	getBooks.getBooks('Hardcover-Fiction', function(err, data){
		res.render('index', {data:data, listname:'Hardcover Fiction'});
	})
});

app.get('/:list', function(req, res){

	var	listName = req.params.list;

	getBooks.getBooks(listName, function(err, data){
		console.log(data);
		res.render('index', {data:data, listname:listName});
	});
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
	});

