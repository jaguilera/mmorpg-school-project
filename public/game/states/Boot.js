'use strict'
/*************

Boot.js

	Realiza la carga inicial del juego
	Make initial load of the game

*************/
define([],function(){
	function Boot() {};

	Boot.prototype = {
		init: function(){
			console.log('%cBoot state init',css);
		},
		preload: function(){
			//preloader assets
		},
		loadUpdate: function(){
			console.log('%cStarted load of assets',css);
		},
		create: function(){
			//setup game environment
			//scale, input, etc...
			//this.game.state.start('preload')
		},
		shutdown: function(){
			console.log('Boot state shutdown')
		}

	};
	return Boot;
});