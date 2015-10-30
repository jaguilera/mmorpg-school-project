'use strict';
/*************

Boot.js

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
			this.game.load.image('loading','assets/loading.png');
		},
		//loadUpdate: function(){
		//},
		create: function(){
			this.game.add.image(0, 0, 'loading');
			this.game.add.text(this.game.world.centerX, 540, "Boot", { font: "65px Monotype Corsiva", fill: "#ff0044", align: "center"});
			this.game.state.start('preload');
		},
		shutdown: function(){
		}

	};
	return Boot;
});