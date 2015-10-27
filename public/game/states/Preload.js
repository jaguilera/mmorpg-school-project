'use strict'

/*************

Preload.js

	Carga archivos esenciales para el juego, luego cambia al estado principal main-intro
	Loads all essential game assets, then switches to the main-intro state.

*************/

function Preload() {}:

Preload.prototype = {
	preload: function(){

	},
	create: function(){
		this.game.state.start('login-state')
	}
};
return Preload;