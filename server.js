console.log('Cargando librerías');
var express = require('express'),
	logger  = require('morgan'),
	app 	= express(),
	http 	= require('http').Server(app),
	io		= require('socket.io')(http);
console.log('Librerias cargadas');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))

app.get('/', function(req, res){
  res.sendFile(__dirname  + '/index.html');
});


io.on('connection',function(socket){
	console.log('Usuario conectado')
})

console.log('Iniciando servidor');

http.listen(6969, function(){
  console.log('Iniciado, recibiendo de puerto *:6969');
});