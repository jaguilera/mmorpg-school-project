'use strict'

define(['phaser','states/boot'], function(Phaser, Boot){

    function Game(){}

    Game.prototype = {
        start: function(){
            console.log('%cInitializing Phaser', css);
            var game = new Phaser.Game(960, 640, Phaser.AUTO, 'canvas_id');
            game.state.add('boot',Boot);
            //game.state.add('dynamic-state',DynamicState),
            //game.state.add('level-master',LevelMaster);
            //game.state.add('login-state',LoginState);
            //game.state.add('preload',Preload);

            game.state.start('boot');
        },
        shutdown: function(){
            console.log('%cExiting Game function')
        }
    };
    return Game;
});