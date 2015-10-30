'use strict';

var Entity = require('../ServerScripts/Entity.js');

class EntityPlayer extends Entity {
	constructor(name,UID,socketID){
		super(name,UID);
		this.socketID = socketID;
	}
	loadFromJSON(data){
		this.zone_x = data.zone_x;
		this.zone_y = data.zone_y;
	}
	loadFromFile(){
		//for use with a database
	}
};

module.exports = EntityPlayer;

/*function EntityPlayer(name,UID,socketID) {
	this.name 		= name;
	this.UID 		= UID;
	this.socketID 	= socketID;
};

module.exports = EntityPlayer;*/