var mysql      = require('mysql');
var database 	= require('../config/database.js'); 



module.exports = {
	getQuery: function(where, callback){
		try{			
			var connection = mysql.createConnection(database['iEXPLORECC']);
			connection.connect(function(err){
				if(!err) {
    				console.log("Database is connected ... nn"); 
    				query="SELECT * from REPORTS where REPORT_ID = ?";
    				connection.query(query,[where.REPORT_ID],function(err, rows, fields) {
						if (!err){
							return callback(null, rows);
						}
 						else{
    			 			return callback(err);
 						}
					});
					connection.end();					
				} else {

    			 	return callback(err);    
				}
			});
		}
		catch(e){
			 return callback(e);
		}

	},
	getReport(queryDetails, callback){
		try{
			query=queryDetails.SQL_QUERY;			
			var connection = mysql.createConnection(database[queryDetails.DATABASE_NAME]);
			connection.connect(function(err){
				if(!err) {
    				console.log("Database is connected ... nn"); 
    				console.log(query);
    				connection.query(query,function(err, rows, fields) {
						if (!err){
							return callback(null, rows);
						}
 						else{
    			 			return callback(err);
 						}
					});
					connection.end();					
				} else {

    			 	return callback(err);    
				}
			});
		}
		catch(e){
			 return callback(e);
		}

	},
	getReportParam(where, callback){
		try{
			
			
			var connection = mysql.createConnection(database['iEXPLORECC']);
			connection.connect(function(err){
				if(!err) {
    				console.log("Database is connected ... nn"); 
    				query="SELECT * from REPORTS where REPORT_ID = ?";
    				connection.query(query,where.report_id,function(err, rows, fields) {
						if (!err){
							return callback(null, rows);
						}
 						else{
    			 			return callback(err);
 						}
					});
					connection.end();					
				} else {

    			 	return callback(err);    
				}
			});
		}
		catch(e){
			 return callback(e);
		}

	}

}