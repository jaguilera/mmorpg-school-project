'use strict'
/*************

Preload.js

	Carga archivos esenciales para el juego, luego cambia al estado principal login-state
	Loads all essential game assets, then call to the login-state state.

*************/

define([], function(){
	function Preload() {};

	Preload.prototype = {
		init: function(){
			console.log('%cPreload state init',css);
		},
		preload: function(){

		},
		create: function(){
			console.log('%cCalling LoginState',css);
			this.game.state.start('login-state');
		}
	};
	return Preload;
})