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
	getPatientData: function(patientId , callback){
		try{
			
			var queryParams=[patientId];

			var query="select gender, age, unitdischargeoffset, hospitaldischargestatus from eicu.patient where patientunitstayid= $1";
			
			const client= new Client(database['eicu']); 

			client.connect();
			client.query(query,queryParams,(err, res) => {
  			
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
	getDiagnosisData: function(patientId, icd9codes,  callback){
		try{

			

			if(icd9codes.length==0){
				return callback(null, []);
			}
			var queryParams=[patientId];

			var params=[];
			for(var i = 1; i <= icd9codes.length; i++) {
  				params.push('$' + (i+1));
  				queryParams.push(icd9codes[i-1]);
			}


			

			var query="select diagnosisOffset, diagnosisString, ICD9Code from eicu.diagnosis where patientunitstayid= $1 and ICD9Code in ("+params.join(",")+") order by diagnosisOffset;";
			


			const client= new Client(database['eicu']); 

			

			client.connect();
			client.query(query,queryParams,(err, res) => {

			
  			
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
	getLabData: function(patientId,labItems,  callback){
		try{


			if(labItems.length==0){
				return callback(null, []);
			}
			
			var queryParams=[patientId];

			var params=[];
			for(var i = 1; i <= labItems.length; i++) {
  				params.push('$' + (i+1));
  				queryParams.push(labItems[i-1]);
			}



			var query="select labResultOffset, labName, labResult from eicu.lab where patientunitstayid= $1 and labName in ("+params.join(",")+") order by labResultOffset;";


			


			const client= new Client(database['eicu']); 

			

			client.connect();
			client.query(query,queryParams,(err, res) => {

			
  			
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

	getPatientsIdsWithoutIcd9: function(icd9codes,excludeIcd9Codes,callback){
		try{

			var params = [];
			var excludeIcd9Codes= icd9codes.concat(excludeIcd9Codes);
			

			if(icd9codes.length==0){
				return callback(null, []);
			}
			
			for(var i = 1; i <= (excludeIcd9Codes.length); i++) {
  				params.push('$' + i);
			}

			
			

			
			var query="select distinct(patientunitstayid) from eicu.diagnosis where icd9code not in ("+ params.join(',')+");";
			

			const client= new Client(database['eicu']); 

			

			client.connect();
			client.query(query,excludeIcd9Codes,(err, res) => {
  				
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

	},

	getPatientsIdsWithIcd9: function(icd9codes, excludeIcd9Codes,callback){
		try{


			var params = [];
			var params1 = [];

			if(icd9codes.length==0){
				return callback(null, []);
			}

			allIcd9s=icd9codes.concat(excludeIcd9Codes);
			
			for(var i = 1; i <= allIcd9s.length; i++) {
				if(i<=icd9codes.length){		
	  				params.push('$' + i);
				}else{
					params1.push('$' + i);
				}
			}



			if(params1.length>0){
				var query="select distinct(patientunitstayid) from eicu.diagnosis where icd9code in ("+ params.join(',')+") and patientunitstayid not in (select distinct(patientunitstayid) from eicu.diagnosis where icd9code in ("+ params1.join(',')+"))";
			}else{
				var query="select distinct(patientunitstayid) from eicu.diagnosis where icd9code in ("+ params.join(',')+")";

			}
			

			

			const client= new Client(database['eicu']); 

			

			client.connect();
			client.query(query,allIcd9s,(err, res) => {
  				
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