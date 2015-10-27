'use strict'
function Game(){}

Game.prototype = {
    start: function(){
        var game = new Phaser.Game(960, 640, Phaser.CANVAS, 'game');
        game.state.add('boot',Boot);
        game.state.add('dynamic-state',DynamicState),
        game.state.add('level-master',LevelMaster);
        game.state.add('login-state',LoginState);
        game.state.add('preload',Preload);
    }
};
