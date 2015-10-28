'use strict'

/**********************************************************************/
/* This state is a link between the main game and the login user form */
/**********************************************************************/

define([],function(){
	function LoginState() {};

	LoginState.prototype = {
		create: function() {
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
			    	"Create an account": function(){
			    	},
			    	"Submit": function(){
			    		var iUser = JSON.stringify($("#input_user").val());
			    		var iPass = JSON.stringify($("#input_pass").val());
			    		console.log('trying to log user: ' + iUser );
			    		socket.emit('CLIENT_LOGIN', { user: iUser, pass: iPass }, function() {
			    			console.log('logged!')
			    		} );
			    	}
			    }
			})
		},
		startGame: function (){
			// this.game.state.start('level-master');
		}
	};
	return LoginState;
})

