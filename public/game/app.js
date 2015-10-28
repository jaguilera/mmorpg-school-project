'use strict'
/*************

App.js

    Función principal, usa requirejs para definir los scripts del juego e inicializa Phaser, llama al estado Boot
    Load all game scripts and starts Phaser, calls Boot stae

*************/

define(['phaser','states/boot','states/preload', 'states/loginstate'], function(Phaser, Boot, Preload, LoginState){

    function Game(){}

    Game.prototype = {
        start: function(){
            console.log('%cInitializing Phaser', css);
            var game = new Phaser.Game(960, 640, Phaser.AUTO, 'canvas_id');
            game.state.add('boot',Boot);
            game.state.add('preload',Preload);
            //game.state.add('dynamic-state',DynamicState),
            //game.state.add('level-master',LevelMaster);
            game.state.add('login-state',LoginState);
            game.state.start('boot');
        },
        shutdown: function(){
            console.log('%cExiting Game function')
        }
    };
    return Game;
});