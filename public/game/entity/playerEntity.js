define(['phaser'],function(Phaser){
	function PlayerEntity(name,uid) {
		this.name = name;
		this.uid = uid;
	};

	PlayerEntity.prototype = Object.create(Phaser.Sprite.prototype);
	PlayerEntity.prototype.constructor = PlayerEntity;

	PlayerEntity.prototype.sayHello = function(){
		console.log("Hello, my name is "+ this.name,this.uid)
	}
	return PlayerEntity;
})
