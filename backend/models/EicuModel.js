var mysql      = require('mysql');
const { Pool, Client } = require('pg')

var database 	= require('../config/database.js'); 



module.exports = {
	getDiagnosis: function(callback){
		try{
			console.log(database['eicu']);	
			var query="select icd9code, count(*) from eicu.diagnosis where icd9code !='' group by icd9code;";
			const client= new Client(database['eicu']); 
			client.connect();
			client.query(query, (err, res) => {
  			
  				if(!err) {
    				
					return callback(null,res.rows);
				} else {
    			 return callback(err);    
				}

  			client.end();
			});

			

			

			


		}
		catch(e){
			 return callback(e);
		}

	}
}