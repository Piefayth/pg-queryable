var express = require('express');
var app = express();
var server = require('http').Server(app);
var Queryable = require('./lib/queryable.js');

var constring = "postgres://postgres:password@localhost/database"


app.use(express.static('public'));

server.listen(3000, function(){
  console.log("Server started on port 3000");
});

var queryable = new Queryable(constring);
var query = 'SELECT name FROM music.genres OFFSET random()*(SELECT count(*) FROM music.genres) LIMIT 1';

queryable.query(query, function(result){
  console.log(result);
}).query(query, function(result){
  query = "SELECT something FROM something";
  console.log(result);
}).end();
