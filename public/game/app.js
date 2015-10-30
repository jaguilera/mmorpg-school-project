'use strict'
/*************

App.js

    Load all game scripts and starts Phaser, calls Boot stae

*************/

define(['phaser',
        'states/Boot',
        'states/Preload', 
        'states/LoginState', 
        'states/LevelMaster', 
        'states/LevelDynamic',
        'entity/PlayerEntity'], 
function(Phaser, 
         Boot, 
         Preload, 
         LoginState, 
         LevelMaster, 
         LevelDynamic, 
         PlayerEntity){

    function Game(){}

    Game.prototype = {
        start: function(){
            console.log('%cInitializing Phaser', css);
            var game = new Phaser.Game(960, 640, Phaser.CANVAS, 'game');
            game.state.add('boot',Boot);
            game.state.add('preload',Preload);
            game.state.add('level-dynamic',LevelDynamic);
            game.state.add('level-master',LevelMaster);
            game.state.add('login-state',LoginState);
            game.state.start('boot');
        },
        shutdown: function(){
            console.log('%cExiting Game function')
        }
    };
    return Game;
});