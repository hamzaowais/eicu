var mysql      = require('mysql');
var database 	= require('../config/database.js'); 



module.exports = {
	select: function(where, callback){
		try{
			console.log(database['iEXPLORECC']);
			var connection = mysql.createConnection(database['iEXPLORECC']);
			connection.connect(function(err){
				if(!err) {
    				console.log("Database is connected ... nn"); 
					
				} else {
    			 return callback(err);    
				}
			});


    		query="Select * from D_ITEMS where CATEGORY = ?";

			connection.query(query,[where.category],function(err, rows, fields) {
			if (!err){
				 return callback(null, rows);
			}

 			else
    			 return callback(err);
			});
			connection.end();


		}
		catch(e){
			 return callback(e);
		}

	}
}