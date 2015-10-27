'use strict'

/**********************************************************************/
/* This state is a link between the main game and the login user form */
/**********************************************************************/

function LoginState() {};

LoginState.prototype = {
	create: function() {
		this.loginForm();
	},
	function loginForm(){
		// this.game.state.start('level-master');
	}
};
