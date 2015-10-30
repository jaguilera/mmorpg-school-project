'use strict'

define(['phaser'],function(Phaser){
	function LevelDynamic() {};

	LevelDynamic.prototype = {
		init: function(mapData){
			this.levelData = mapData;
			console.log('%cLevelDynamic: init()',css);
			console.log('%cLevelDynamic: Creating dynamic tilemap level',css);
		},
		preload: function(){
			this.game.load.tilemap('A_1_1',null,this.levelData,Phaser.Tilemap.TILED_JSON);
			this.game.load.image('Pradera32','tilemaps/Pradera32.png');
		},
		create: function(){
			console.log(this.game.cache.getTilemapData('A_1_1'));
			map = this.game.add.tilemap('A_1_1',32,32);
			map.addTilesetImage('Pradera32','Pradera32');
			layer = map.createLayer('Fondo');
			layer = map.createLayer('Objetos');
			layer = map.createLayer('Transparentes');
		},
		setTilemapData: function(data){
			this.levelData = data;
		}
	};
	return LevelDynamic;
})