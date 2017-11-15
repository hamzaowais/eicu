var mysql      = require('mysql');

var database 	= require('../config/database.js'); 



module.exports = {
	select: function(where,limits, callback){
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


			if(limits){
    			query="SELECT CHARTTIME,VALUE, ITEMID from CHARTEVENTS where SUBJECT_ID = ? and ITEMID= ? and HADM_ID= ? and ICUSTAY_ID=? and CHARTTIME < NOW()  order by CHARTTIME  DESC limit "+limits;

			}else{
    			query="SELECT CHARTTIME,VALUE, ITEMID from CHARTEVENTS where SUBJECT_ID = ? and ITEMID= ? and HADM_ID= ? and ICUSTAY_ID=? and CHARTTIME < NOW()";
			}
			connection.query(query,[where.subject_id,where.item_id,where.hadm_id,where.icustay_id],function(err, rows, fields) {
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