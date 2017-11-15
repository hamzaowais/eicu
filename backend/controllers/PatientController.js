var CharteventsModel= require('../models/CharteventsModel.js');
var D_itemsModel= require('../models/D_itemsModel.js');
var async = require('async');


MillisecondsInDay=86400000;
module.exports = {
	getVitals: function(inputdata, callback){
		try{
			
			var where= inputdata;
			CharteventsModel.select(where, null,function(err, results){
				if(err){
					return callback(err);
				}
				output={};
				output['last24Hour']=[];
				output['last72Hour']=[];
				output['sinceICUadmit']=[];

				currentTimeStamp= Date.now();

				results.forEach(function(result,index){

					resultTimestamp = new Date(result['CHARTTIME']);


					resultTimestamp = resultTimestamp.getTime();

					
					
					if (resultTimestamp > (currentTimeStamp-MillisecondsInDay) && resultTimestamp<currentTimeStamp){
						temp={};
						temp['time']=result['CHARTTIME'];
						temp['value']=result['VALUE'];
						output['last24Hour'].push(temp);
					}

					if (resultTimestamp > (currentTimeStamp-3*MillisecondsInDay) && resultTimestamp<currentTimeStamp){
						
						temp={};
						temp['time']=result['CHARTTIME'];
						temp['value']=result['VALUE'];
						output['last72Hour'].push(temp);
					}
					if (resultTimestamp<currentTimeStamp){
						temp={};
						temp['time']=result['CHARTTIME'];
						temp['value']=result['VALUE'];
						output['sinceICUadmit'].push(temp);
						
					}
					
				});

				return callback(null, output);
			});

		}
		catch(e){
			return callback(e);
		}

	},


	getVitalsAll: function(inputdata, callback){
		try{

			var where= inputdata;
			// get all the itemids from the categoy ids

			// results.forEach(function(result){
			// 	
			// 	Object.keys(where).forEach(function(each){
			// 		result[each]=where[each];

			// 	});
			// });


			D_itemsModel.select(where, function(err, items){
				if(err){
					return callback(err);
				}
				async.map(items, function(item,cb){
					clause={};
					
					['subject_id','hadm_id','icustay_id','ITEMID'].forEach(function(r){
						
						if(r=="ITEMID"){
							clause['item_id']=item.ITEMID;
						}else{
							clause[r]=where[r];
							
						}
					});
					
					
					
					CharteventsModel.select(clause, 1 ,function(err, vitals){
						
						if(err)
						{
							return cb(err);
						}
						
						return cb(null,vitals);
					});

				},function(err,results){
					
					itemsObj={};
					results.forEach(function(result){
						if(result[0]&&result[0]["ITEMID"]){
						itemsObj[result[0]["ITEMID"]]=result[0];
					}
					});

					
						
					console.log(itemsObj);

					items.forEach(function(item){
						console.log(item.ITEMID);						
						if(itemsObj[item.ITEMID]){
							item.value=itemsObj[item.ITEMID].VALUE;
							item.time=itemsObj[item.ITEMID].CHARTTIME;
						}else{
							item.value=null;
							item.time=null;
						}
					});
					return callback(null, items);
					
				});
			});

		}
		catch(e){
			return callback(e);
		}

	}
}