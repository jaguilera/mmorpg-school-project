'use strict'

/**********************************************************
Player will end here anytime he is changing his location, 
this will clear LevelDynamic and we will be able to recall
it and ask for new map data to server
**********************************************************/

define([], function(){
	function LevelMaster() {};

	LevelMaster.prototype = {
		init: function() {
			console.log('%cLevelMaster init',css)
		},
		create: function() {
			this.game.add.image(0, 0, 'loading');
			this.game.add.text(this.game.world.centerX, 540, "Loading level", { font: "65px Monotype Corsiva", fill: "#ff0044", align: "center"});
			socket.emit('CLIENT_GET_MAP', { PlayerID: myPlayer.uid }, function(data){
				this.game.state.start('level-dynamic',true,false,data);
			}.bind(this) );
		},
	};
	return LevelMaster;
})