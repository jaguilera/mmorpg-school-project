'use strict';

var css = 'background: #222; color: #bada55';
var cssError = 'background: #222; color: #f55';

var login = $("#loginForm");
login.hide();
//var playerUID;
var myPlayer;

var map;
var layer;

require.config({
	paths:{
		'phaser': '/game/phaser'
	},
	shim: {
        phaser: {
            exports: 'Phaser'
        }
	}
})

require(['phaser','app'], function(Phaser,App){
	var app = new App();
	app.start()
});