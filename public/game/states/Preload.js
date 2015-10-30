'use strict'
/*************

Preload.js

	Loads all essential game assets, then call to the login-state state.

*************/

define([], function(){
	function Preload() {};

	Preload.prototype = {
		init: function(){
			console.log('%cPreload state init',css);
		},
		preload: function(){
			this.game.load.image('loading','assets/loading.png');
		},
		create: function(){
			this.game.add.image(0, 0, 'loading');
			this.game.add.text(this.game.world.centerX, 540, "Preload", { font: "65px Monotype Corsiva", fill: "#ff0044", align: "center"});
			console.log('%cCalling LoginState',css);
			this.game.state.start('login-state');
		}
	};
	return Preload;
})