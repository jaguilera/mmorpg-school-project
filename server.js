'use strict';

console.log('Loading libraries');
var express  = require('express'),
    logger   = require('morgan'),
    app      = express(),
    http     = require('http').Server(app),
    io       = require('socket.io')(http),
    database = require('./ServerScripts/Database.js'),
    player   = require('./ServerScripts/EntityPlayer.js'),
    fs       = require('fs'),
    colors   = require('colors');
console.log('Loaded libraries');
var css = 'background: #222; color: #bada55';
var cssError = 'background: #222; color: #f55';

var entities = 0;
var online_players = {};
var online_players_count = 0;
//console.log(dump(users))

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))

app.get('/', function(req, res){
	console.log('Sending /index.html')
  	res.sendFile(__dirname  + '/index.html');
});

io.on('connection', function(socket){
	console.log('Client connected'.green);
	socket.on('CLIENT_LOGIN',function(msg,fn){
        console.log('Attempt to log, user: ' + msg.user.yellow);
        var dbFile = 'data/players/' + msg.user + '.json';
		fs.stat(dbFile,function(err,stats){
            if(err){
                console.log('User ' + msg.user + ' not found!'.red)
            }
            else{
                if(!online_players[socket.id]){
                    online_players[socket.id] = new player(msg.user, ++entities, socket.id);
                    console.log(msg.user + " logged on socketID " + socket.id+''.green);
                    fn(online_players[socket.id].UID);
                    fs.readFile(dbFile, 'utf8', function(err,data){
                        online_players[socket.id].loadFromJSON(JSON.parse(data));
                        console.log(online_players[socket.id]);
                        console.log("Online Players: " + ++online_players_count+''.blue);
                    }); 
                }
            }
		});
	});
    socket.on('disconnect',function(){
        if(online_players[socket.id]){
            console.log('User ' + online_players[socket.id].name + ' disconnected.');
            online_players[socket.id] = null;
            delete online_players[socket.id];
            console.log("Online Players: " + --online_players_count+''.blue);
        }
    });
    socket.on('CLIENT_GET_MAP',function(data,fn){
        if(online_players[socket.id]){
            var p = online_players[socket.id];
            var mapFile = 'data/maps/A_' + p.zone_x + '_' + p.zone_y + '.json';
            fs.stat(mapFile,function(err,stats){
                if(!err){
                    fs.readFile(mapFile,'utf8',function(err,data){
                        fn(data);
                    });
                }
            });
        }
    });
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

/*
MySQL tests ignore them for now
var DB = new database()
DB.config('localhost','root','','mmorpg_server');
DB.connect();
DB.test();
DB.disconnect();*/

//Test var that acts like a user search in db
//fs.stat('data/trova.json', function(err,stats){
    //fs.readFile('data/trova.json', 'utf8', function(err,data){
        //console.log('fs read data: ')
        //console.log(data);
    //})
    //console.log(stats);
//})