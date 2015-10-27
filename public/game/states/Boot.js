'use strict'
/*************

Boot.js

	Realiza la carga inicial del juego
	Make initial load of the game

*************/

function Boot() {};

Boot.prototype = {
	preload: function(){
		//preloader assets
	},
	create: function(){
		//setup game environment
		//scale, input, etc...
		this.game.state.start('preload')
	}
};
