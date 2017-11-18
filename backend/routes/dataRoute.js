var MimicControllers= require('../controllers/MimicController.js');
var PatientControllers= require('../controllers/PatientController.js');
var ReportControllers= require('../controllers/ReportController.js');
var EicuController = require('../controllers/EicuController.js');

module.exports = {
	getMimicData: function(request, response) {
		
		console.log(JSON.stringify(Object.keys(request)));
		//return response.json(Object.keys(request.query));	

				input = {"hello": 1,"nopr": 2}
	return response.json(input);
	},

	getInitialData: function(request,response){
		try{
			EicuController.getInitialData(function(err, data) {
 				if(err){
 					throw err;
 				}
 				return response.json(data);
 			});
			
		}
		catch(e){
			request.output={}
			request.output.error=true;
			request.output.message=e.message;
			response.json(request.output);
		}

	},

	generateReport: function(request,response){
		try{

			if(request&&request.body){
				
				['icd9codes','inputfeatures','targetfeatures'].forEach(function(str){
					if (!request.body[str]){
						var err = new Error(str+' is not present in the URL');
						throw err;
					}
					});

					request.input={};
					['icd9codes','inputfeatures','targetfeatures'].forEach(function(str){
						request.input[str]=request.body[str];
					});


					EicuController.generateReport(request.input, function(err, data) {
 					if(err){
 						throw err;
 					}
 					return response.json(data);
 					});

					
					// PatientControllers.getVitalsAll(request.input,function(err, data) {
 				// 		 if(err){
 				// 		 	throw err;
 				// 		 }
 						
 						
 				// 		return response.json(data);


					// });

					
						
				

			}
			else{
				console.log(request.query);
				var err = new Error(' Query is not present in the URL');
				throw err;
			}
			
		}
		catch(e){
			request.output={}
			request.output.error=true;
			request.output.message=e.message;
			response.json(request.output);
		}

	}
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