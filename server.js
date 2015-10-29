'use strict';

console.log('Loading libraries');
var express  = require('express'),
    logger   = require('morgan'),
    app      = express(),
    http     = require('http').Server(app),
    io       = require('socket.io')(http),
    database = require('./ServerScripts/Database.js');
console.log('Loaded libraries');

/*
MySQL tests ignore them for now
var DB = new database()
DB.config('localhost','root','','mmorpg_server');
DB.connect();
DB.test();
DB.disconnect();*/

//Test var that acts like a user search in db
var users = {
	"trova":"A1B2C3"
}

//console.log(dump(users))

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))

app.get('/', function(req, res){
	console.log('Sending /index.html')
  	res.sendFile(__dirname  + '/index.html');
});


io.on('connection', function(socket){
	console.log('User connected')
	socket.on('CLIENT_LOGIN',function(msg,fn){
		if(users[msg.user]){
			fn(users[msg.user]);
		}
	})
})

console.log('Starting Server');

http.listen(6969, function(){
	console.log('Started. Listening on *:6969');
});

//Simple dump function for debugging purposes
function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }
    console.log(out)
}