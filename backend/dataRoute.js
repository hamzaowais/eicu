var MimicControllers= require('../controllers/MimicController.js');
var PatientControllers= require('../controllers/PatientController.js');
var ReportControllers= require('../controllers/ReportController.js');


module.exports = {
	getMimicData: function(request, response) {
		
		console.log(JSON.stringify(Object.keys(request)));
		response.json(Object.keys(request.query));	;

				input = {
			"hello": 1,
			"nopr": 2

		}
		//response.end(JSON.stringify(input));
	}

	// getVitals: function(request,response){
	// 	try{
	// 		if(request&&request.query){
	// 			['subject_id','hadm_id','icustay_id','item_id'].forEach(function(str){
	// 				if (!request.query[str]){
	// 					var err = new Error(str+' is not present in the URL');
	// 					throw err;
	// 				}
	// 				});

	// 				request.input={};
	// 				['subject_id','hadm_id','icustay_id','item_id'].forEach(function(str){
	// 					request.input[str]=request.query[str];
	// 				});
	// 				PatientControllers.getVitals(request.input,function(err, data) {
 // 						 if(err){
 // 						 	throw err;
 // 						 }
 						
 						
 // 						return response.json(data);


	// 				});

					
						
				

	// 		}
	// 		else{
	// 			console.log(request.query);
	// 			var err = new Error(' Query is not present in the URL');
	// 			throw err;
	// 		}
			
	// 	}
	// 	catch(e){
	// 		request.output={}
	// 		request.output.error=true;
	// 		request.output.message=e.message;
	// 		response.json(request.output);
	// 	}

	// },

	// getVitalsAll: function(request,response){
	// 	try{
	// 		if(request&&request.query){
	// 			['subject_id','hadm_id','icustay_id','category'].forEach(function(str){
	// 				if (!request.query[str]){
	// 					var err = new Error(str+' is not present in the URL');
	// 					throw err;
	// 				}
	// 				});

	// 				request.input={};
	// 				['subject_id','hadm_id','icustay_id','category'].forEach(function(str){
	// 					request.input[str]=request.query[str];
	// 				});

	// 				console.log(request.input);
	// 				PatientControllers.getVitalsAll(request.input,function(err, data) {
 // 						 if(err){
 // 						 	throw err;
 // 						 }
 						
 						
 // 						return response.json(data);


	// 				});

					
						
				

	// 		}
	// 		else{
	// 			console.log(request.query);
	// 			var err = new Error(' Query is not present in the URL');
	// 			throw err;
	// 		}
			
	// 	}
	// 	catch(e){
	// 		request.output={}
	// 		request.output.error=true;
	// 		request.output.message=e.message;
	// 		response.json(request.output);
	// 	}

	// },
	// getReport:function(request,response){  
	// 	try{
	// 		if(request&&request.query){
	// 			['REPORT_ID'].forEach(function(str){
	// 				if (!request.query[str]){
	// 					var err = new Error(str+' is not present in the URL');
	// 					throw err;
	// 				}
	// 			});

	// 			request.input={};
	// 			Object.keys(request.query).forEach(function(str){
	// 				request.input[str]=request.query[str];
	// 			});
	// 				ReportControllers.getReport(request.input,function(err, data) {
 // 						 if(err){
 // 						 	throw err;
 // 						 }
 // 						return response.json(data);
	// 				});
	// 		}
	// 		else{
				
	// 			var err = new Error(' Query is not present in the URL');
	// 			throw err;
	// 		}

	// 	}
	// 	catch(e){
	// 		request.output={}
	// 		request.output.error=true;
	// 		request.output.message=e.message;

	// 		response.json(request.output);
	// 		return;
	// 	}

	// },
	// getReportParam:function(request,response){
	// 		try{
	// 		if(request&&request.query){
	// 			['report_id'].forEach(function(str){
	// 				if (!request.query[str]){
	// 					var err = new Error(str+' is not present in the URL');
	// 					throw err;
	// 				}
	// 			});

	// 			request.input={};
	// 			['report_id'].forEach(function(str){
	// 				request.input[str]=request.query[str];
	// 			});

	// 				console.log(request.input);
	// 				return ReportControllers.getReportParam(request.input,function(err, data) {

 // 						 if(err){
 						 
 // 						 	request.output={}
	// 						request.output.error=true;
	// 						request.output.message=err.message;

	// 						response.json(request.output);
	// 						return;

 // 						 }
 // 						return response.json(data);
	// 				});
	// 		}
	// 		else{
	// 			console.log(request.query);

	// 			var err = new Error(' Query is not present in the URL');
	// 			throw err;
	// 		}

	// 	}catch(e){
	// 		request.output={}
	// 		request.output.error=true;
	// 		request.output.message=e.message;

	// 		response.json(request.output);
	// 		return;
	// 	}

	// }
}