var mysql      = require('mysql');
const { Pool, Client } = require('pg')

var database 	= require('../config/database.js'); 



module.exports = {
	getDiagnosis: function(callback){
		try{
			
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

	},
	getVitalsignData: function(patientId, callback){
		try{

			var patientIds=[patientId];
			

			var query="select * from eicu.vitalperiodic where patientunitstayid= $1 order by observationoffset;"
			
			const client= new Client(database['eicu']); 

			

			client.connect();
			client.query(query,patientIds,(err, res) => {
  			
  				if(!err) {
    				client.end();
					return callback(null,res.rows);
					
				} else {
					console.log(err);
					client.end();
    			 return callback(err); 
    			 
				}

  			
			});


		}
		catch(e){
			 return callback(e);
		}

	},
	getPatientsIdsWithIcd9: function(icd9codes, callback){
		try{


			var params = [];
			
			for(var i = 1; i <= icd9codes.length; i++) {
  				params.push('$' + i);
			}
			var query="select distinct(patientunitstayid) from eicu.diagnosis where icd9code in ("+ params.join(',')+");";
			console.log(query);

			const client= new Client(database['eicu']); 

			

			client.connect();
			client.query(query,icd9codes,(err, res) => {
  			
  				if(!err) {
    				
					return callback(null,res.rows);
				} else {
					console.log(err);
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