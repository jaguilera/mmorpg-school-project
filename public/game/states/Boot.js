'use strict';
/*************

Boot.js

	Realiza la carga inicial del juego, llama a la funcion precargar
	Make initial load of the game, calls preload function

*************/
/*global define:true*/
/*global css:true*/
/*global cssError:true*/
/*global console:true*/
define([], function(){
	function Boot() {}

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
			console.log('%cCalling Preload',css);
			this.game.state.start('preload');
		},
		shutdown: function(){
			console.log('%cBoot state shutdown',cssError);
		}

	};
	return Boot;
});