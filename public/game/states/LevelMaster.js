'use strict'
function LevelMaster() {};

LevelMaster.prototype = {
	init: function() {
		console.log('%cLevelMaster init',css)
	},
	create: function() {
		//this.getMapAndPack();
	},
	decideLevelState: function(){

	},
	/**********************************
	*  function getMapAndPack()
	*  desc:
	*      this function will ask to the server the players current position tilemap pack
	*      and then pass the json data to a dynamic state that loads the map
	**********************************/
	getMapAndLoad: function(ID){
		socket.emit('CLIENT_GET_MAP', { PlayerID: ID } );
		socket.on('SERVER_MAP_PACK', function(data) {
			this.game.state.start('dynamic-stage',true,false,data);
		} )

	}
};
