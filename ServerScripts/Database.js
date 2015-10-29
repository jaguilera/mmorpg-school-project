'use strict';

function Database() {};

Database.prototype = {
	/*var host,
		user,
		password,
		database;
	var connection;*/
	mysql: require('mysql'),
	config: function(host,user,password,database){
		this.host = host;
		this.user = user;
		this.password = password;
		this.database = database;

	},
	connect: function(){
			this.connection = this.mysql.createConnection({
			host: this.host,
			user: this.user,
			password: this.password,
			database: this.database
		})
	},
	disconnect: function(){
		this.connection.end();
	},
	//as the name says, just for testing purposes
	test: function(){
		this.connection.query("select * from testtable",function(err,obj,fields){
            if(!err) {
            	console.log(obj)
                console.log(obj[0])
            }           
        });
	},
};

module.exports = Database;