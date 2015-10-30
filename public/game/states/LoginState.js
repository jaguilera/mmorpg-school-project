'use strict'

/**********************************************************************/
/* This state is a link between the main game and the login user form */
/**********************************************************************/

define(['entity/PlayerEntity'],function(PlayerEntity){
	function LoginState() {};

	LoginState.prototype = {
		create: function() {
			this.game.add.image(0, 0, 'loading');
			this.game.add.text(this.game.world.centerX, 540, "Login", { font: "65px Monotype Corsiva", fill: "#ff0044", align: "center"});
			this.loginForm();
		},
		loginForm: function(){
			//Set a hidden dialog that has the login form
			console.log('Creating dialog box');
			$("#loginForm").dialog({
				//height: 200,
				dialogClass: "no-close",
				closeOnEscape: false,
				title: "Login",
				draggable: false,
			    buttons: {
			    	"Create an account": function(){},
			    	"Submit": function(){
			    		var iUser = $("#input_user").val();
			    		var iPass = $("#input_pass").val();
			    		console.log('trying to log user: ' + iUser );
			    		socket.emit('CLIENT_LOGIN', { user: iUser, pass: iPass }, function(msg) {
			    			$("#loginForm").dialog('close');
		    				myPlayer = new PlayerEntity(iUser,msg)
			    			this.startGame();
			    		}.bind(this) );
			    	}.bind(this)
			    }
			})
		},
		startGame: function (){
			console.log("%cStarting game!",css)
			this.game.state.start('level-master');
		},
		shutdown: function(){
			console.log("%cLoginState: shutdown",css)
		}
	};
	return LoginState;
})

