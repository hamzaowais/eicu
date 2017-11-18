var CharteventsModel= require('../models/CharteventsModel.js');
var D_itemsModel= require('../models/D_itemsModel.js');

var EicuModel= require('../models/EicuModel.js');
var async = require('async');


MillisecondsInDay=86400000;
module.exports = {
	getInitialData: function(callback){
		try{
			
			var itemDetails= [{dbsource:"lab", labell:"haptoglobin", unitl:"mg/dL", countl:"4634"},{dbsource:"lab", labell:"Procainamide", unitl:"mcg/mL", countl:"10"},{dbsource:"lab", labell:"PT", unitl:"sec", countl:"389725"},{dbsource:"lab", labell:"glucose", unitl:"mg/dL", countl:"1319496"},{dbsource:"lab", labell:"Mode", unitl:"-", countl:"609"},{dbsource:"lab", labell:"Vancomycin - random", unitl:"mcg/mL", countl:"21366"},{dbsource:"lab", labell:"Tobramycin - trough", unitl:"mcg/mL", countl:"237"},{dbsource:"lab", labell:"potassium", unitl:"mmol/L", countl:"1493261"},{dbsource:"lab", labell:"Base Deficit", unitl:"mEq/L", countl:"66496"},{dbsource:"lab", labell:"Lithium", unitl:"mmol/L", countl:"1375"},{dbsource:"lab", labell:"Pressure Support", unitl:"cm H2O", countl:"24537"},{dbsource:"lab", labell:"Tobramycin - peak", unitl:"mcg/mL", countl:"129"},{dbsource:"lab", labell:"Pressure Control", unitl:"cm H2O", countl:"2300"},{dbsource:"lab", labell:"prealbumin", unitl:"mg/dL", countl:"20010"},{dbsource:"lab", labell:"LPM O2", unitl:"L/min", countl:"28171"},{dbsource:"lab", labell:"Fe", unitl:"mcg/dL", countl:"19608"},{dbsource:"lab", labell:"paO2", unitl:"mm Hg", countl:"420762"},{dbsource:"lab", labell:"ethanol", unitl:"mg/dL", countl:"12555"},{dbsource:"lab", labell:"ammonia", unitl:"mcg/dL", countl:"28793"},{dbsource:"lab", labell:"Vancomycin - peak", unitl:"mcg/mL", countl:"35"},{dbsource:"lab", labell:"cortisol", unitl:"mcg/dL", countl:"9178"},{dbsource:"lab", labell:"protein C", unitl:"%", countl:"702"},{dbsource:"lab", labell:"WBC's in synovial fluid", unitl:"-", countl:"146"},{dbsource:"lab", labell:"ALT (SGPT)", unitl:"Units/L", countl:"434605"},{dbsource:"lab", labell:"Methemoglobin", unitl:"%", countl:"101924"},{dbsource:"lab", labell:"glucose - CSF", unitl:"mg/dL", countl:"4071"},{dbsource:"lab", labell:"Tobramycin - random", unitl:"mcg/mL", countl:"742"},{dbsource:"lab", labell:"protein S", unitl:"%", countl:"643"},{dbsource:"lab", labell:"ionized calcium", unitl:"mg/dL", countl:"149138"},{dbsource:"lab", labell:"serum ketones", unitl:"-", countl:"855"},{dbsource:"lab", labell:"protein - CSF", unitl:"mg/dL", countl:"4138"},{dbsource:"lab", labell:"WBC's in urine", unitl:"-", countl:"24453"},{dbsource:"lab", labell:"Device", unitl:"-", countl:"2704"},{dbsource:"lab", labell:"transferrin", unitl:"mg/dL", countl:"4959"},{dbsource:"lab", labell:"WBC x 1000", unitl:"K/mcL", countl:"1134952"},{dbsource:"lab", labell:"Digoxin", unitl:"ng/mL", countl:"8884"},{dbsource:"lab", labell:"Base Excess", unitl:"mEq/L", countl:"328813"},{dbsource:"lab", labell:"-eos", unitl:"%", countl:"583568"},{dbsource:"lab", labell:"RPR titer", unitl:"-", countl:"3"},{dbsource:"lab", labell:"Peak Airway/Pressure", unitl:"cm H2O", countl:"8827"},{dbsource:"lab", labell:"urinary specific gravity", unitl:"-", countl:"106853"},{dbsource:"lab", labell:"lactate", unitl:"mmol/L", countl:"205591"},{dbsource:"lab", labell:"Amikacin - trough", unitl:"mcg/mL", countl:"94"},{dbsource:"lab", labell:"FiO2", unitl:"%", countl:"360107"},{dbsource:"lab", labell:"T3RU", unitl:"%", countl:"531"},{dbsource:"lab", labell:"WBC's in body fluid", unitl:"-", countl:"2022"},{dbsource:"lab", labell:"Gentamicin - trough", unitl:"mcg/mL", countl:"754"},{dbsource:"lab", labell:"PEEP", unitl:"cm H2O", countl:"112830"},{dbsource:"lab", labell:"chloride", unitl:"mmol/L", countl:"1283839"},{dbsource:"lab", labell:"Spontaneous Rate", unitl:"/min", countl:"9696"},{dbsource:"lab", labell:"Site", unitl:"-", countl:"272"},{dbsource:"lab", labell:"Carboxyhemoglobin", unitl:"%", countl:"100040"},{dbsource:"lab", labell:"WBC's in pleural fluid", unitl:"-", countl:"456"},{dbsource:"lab", labell:"TV", unitl:"mls", countl:"94246"},{dbsource:"lab", labell:"troponin - T", unitl:"ng/mL", countl:"39864"},{dbsource:"lab", labell:"sodium", unitl:"mmol/L", countl:"1393205"},{dbsource:"lab", labell:"Vent Other", unitl:"-", countl:"1653"},{dbsource:"lab", labell:"RBC", unitl:"M/mcL", countl:"1132361"},{dbsource:"lab", labell:"HSV 1&2 IgG AB titer", unitl:"-", countl:"12"},{dbsource:"lab", labell:"urinary sodium", unitl:"mmol/L", countl:"16800"},{dbsource:"lab", labell:"prolactin", unitl:"ng/mL", countl:"789"},{dbsource:"lab", labell:"Lidocaine", unitl:"mcg/mL", countl:"256"},{dbsource:"lab", labell:"anion gap", unitl:"-", countl:"1024278"},{dbsource:"lab", labell:"Vancomycin - trough", unitl:"mcg/mL", countl:"41257"},{dbsource:"lab", labell:"total cholesterol", unitl:"mg/dL", countl:"34514"},{dbsource:"lab", labell:"O2 Sat (%)", unitl:"%", countl:"340062"},{dbsource:"lab", labell:"fibrinogen", unitl:"mg/dL", countl:"38800"},{dbsource:"lab", labell:"Ferritin", unitl:"ng/mL", countl:"15343"},{dbsource:"lab", labell:"T4", unitl:"mcg/dL", countl:"1844"},{dbsource:"lab", labell:"-monos", unitl:"%", countl:"625898"},{dbsource:"lab", labell:"Tacrolimus-FK506", unitl:"ng/mL", countl:"6587"},{dbsource:"lab", labell:"HSV 1&2 IgG AB", unitl:"-", countl:"43"},{dbsource:"lab", labell:"CPK", unitl:"Units/L", countl:"108117"},{dbsource:"lab", labell:"TSH", unitl:"mcU/ml", countl:"45271"},{dbsource:"lab", labell:"BNP", unitl:"pg/mL", countl:"46406"},{dbsource:"lab", labell:"calcium", unitl:"mg/dL", countl:"1226978"},{dbsource:"lab", labell:"paCO2", unitl:"mm Hg", countl:"416467"},{dbsource:"lab", labell:"Clostridium difficile toxin A+B", unitl:"-", countl:"109"},{dbsource:"lab", labell:"myoglobin", unitl:"ng/mL", countl:"3755"},{dbsource:"lab", labell:"cd 4", unitl:"-", countl:"500"},{dbsource:"lab", labell:"Phenytoin", unitl:"mcg/mL", countl:"6108"},{dbsource:"lab", labell:"triglycerides", unitl:"mg/dL", countl:"53344"},{dbsource:"lab", labell:"lipase", unitl:"Units/L", countl:"43304"},{dbsource:"lab", labell:"pH", unitl:"-", countl:"413071"},{dbsource:"lab", labell:"-lymphs", unitl:"%", countl:"630836"},{dbsource:"lab", labell:"WBC's in cerebrospinal fluid", unitl:"-", countl:"3331"},{dbsource:"lab", labell:"MPV", unitl:"fL", countl:"770659"},{dbsource:"lab", labell:"Total CO2", unitl:"-", countl:"185611"},{dbsource:"lab", labell:"Gentamicin - peak", unitl:"mcg/mL", countl:"405"},{dbsource:"lab", labell:"PT - INR", unitl:"ratio", countl:"402092"},{dbsource:"lab", labell:"CPK-MB INDEX", unitl:"%", countl:"29240"},{dbsource:"lab", labell:"TIBC", unitl:"mcg/dL", countl:"14649"},{dbsource:"lab", labell:"free T4", unitl:"ng/dL", countl:"13520"},{dbsource:"lab", labell:"albumin", unitl:"g/dL", countl:"506025"},{dbsource:"lab", labell:"total bilirubin", unitl:"mg/dL", countl:"427307"},{dbsource:"lab", labell:"urinary osmolality", unitl:"mOsm/L", countl:"9414"},{dbsource:"lab", labell:"urinary creatinine", unitl:"mg/dL", countl:"13282"},{dbsource:"lab", labell:"HIV 1&2 AB", unitl:"-", countl:"7"},{dbsource:"lab", labell:"reticulocyte count", unitl:"%", countl:"6304"},{dbsource:"lab", labell:"Fe/TIBC Ratio", unitl:"%", countl:"11317"},{dbsource:"lab", labell:"MCH", unitl:"pg", countl:"1059865"},{dbsource:"lab", labell:"AST (SGOT)", unitl:"Units/L", countl:"437311"},{dbsource:"lab", labell:"CRP", unitl:"mg/dL", countl:"12932"},{dbsource:"lab", labell:"Amikacin - random", unitl:"mcg/mL", countl:"176"},{dbsource:"lab", labell:"Respiratory Rate", unitl:"/min", countl:"49021"},{dbsource:"lab", labell:"magnesium", unitl:"mg/dL", countl:"648642"},{dbsource:"lab", labell:"T3", unitl:"ng/dL", countl:"1092"},{dbsource:"lab", labell:"bedside glucose", unitl:"mg/dL", countl:"3175835"},{dbsource:"lab", labell:"total protein", unitl:"g/dL", countl:"432993"},{dbsource:"lab", labell:"Vitamin B12", unitl:"pg/mL", countl:"14825"},{dbsource:"lab", labell:"Theophylline", unitl:"mcg/mL", countl:"664"},{dbsource:"lab", labell:"PTT ratio", unitl:"ratio", countl:"11041"},{dbsource:"lab", labell:"LDL", unitl:"mg/dL", countl:"24277"},{dbsource:"lab", labell:"-bands", unitl:"%", countl:"75699"},{dbsource:"lab", labell:"creatinine", unitl:"mg/dL", countl:"1277760"},{dbsource:"lab", labell:"BUN", unitl:"mg/dL", countl:"1270484"},{dbsource:"lab", labell:"alkaline phos.", unitl:"Units/L", countl:"429899"},{dbsource:"lab", labell:"HCO3", unitl:"mmol/L", countl:"390863"},{dbsource:"lab", labell:"24 h urine protein", unitl:"mg/24HR", countl:"2870"},{dbsource:"lab", labell:"RDW", unitl:"%", countl:"1048569"},{dbsource:"lab", labell:"WBC's in pericardial fluid", unitl:"-", countl:"47"},{dbsource:"lab", labell:"phosphate", unitl:"mg/dL", countl:"425439"},{dbsource:"lab", labell:"uric acid", unitl:"mg/dL", countl:"13623"},{dbsource:"lab", labell:"Hct", unitl:"%", countl:"1279704"},{dbsource:"lab", labell:"MCHC", unitl:"g/dL", countl:"1104854"},{dbsource:"lab", labell:"PTT", unitl:"sec", countl:"285251"},{dbsource:"lab", labell:"Oxyhemoglobin", unitl:"%", countl:"35738"},{dbsource:"lab", labell:"salicylate", unitl:"mg/dL", countl:"6333"},{dbsource:"lab", labell:"Temperature", unitl:"&#176;C", countl:"113472"},{dbsource:"lab", labell:"bicarbonate", unitl:"mmol/L", countl:"1199866"},{dbsource:"lab", labell:"Hgb", unitl:"g/dL", countl:"1298708"},{dbsource:"lab", labell:"Acetaminophen", unitl:"mcg/mL", countl:"8512"},{dbsource:"lab", labell:"Vent Rate", unitl:"/min", countl:"55243"},{dbsource:"lab", labell:"-basos", unitl:"%", countl:"558783"},{dbsource:"lab", labell:"ESR", unitl:"mm/hr", countl:"13242"},{dbsource:"lab", labell:"ANF/ANA", unitl:"-", countl:"448"},{dbsource:"lab", labell:"Amikacin - peak", unitl:"mcg/mL", countl:"54"},{dbsource:"lab", labell:"Cyclosporin", unitl:"ng/mL", countl:"599"},{dbsource:"lab", labell:"serum osmolality", unitl:"mOsm/kg H2O", countl:"28521"},{dbsource:"lab", labell:"folate", unitl:"ng/mL", countl:"11550"},{dbsource:"lab", labell:"CRP-hs", unitl:"mg/L", countl:"979"},{dbsource:"lab", labell:"amylase", unitl:"Units/L", countl:"16650"},{dbsource:"lab", labell:"WBC's in peritoneal fluid", unitl:"-", countl:"341"},{dbsource:"lab", labell:"direct bilirubin", unitl:"mg/dL", countl:"77732"},{dbsource:"lab", labell:"Carbamazepine", unitl:"mcg/mL", countl:"740"},{dbsource:"lab", labell:"Gentamicin - random", unitl:"mcg/mL", countl:"783"},{dbsource:"lab", labell:"24 h urine urea nitrogen", unitl:"G/24HR", countl:"275"},{dbsource:"lab", labell:"O2 Content", unitl:"mls/dL", countl:"64619"},{dbsource:"lab", labell:"CPK-MB", unitl:"ng/mL", countl:"66958"},{dbsource:"lab", labell:"platelets x 1000", unitl:"K/mcL", countl:"1149488"},{dbsource:"lab", labell:"-polys", unitl:"%", countl:"559192"},{dbsource:"lab", labell:"Phenobarbital", unitl:"mcg/mL", countl:"654"},{dbsource:"lab", labell:"NAPA", unitl:"mcg/mL", countl:"10"},{dbsource:"lab", labell:"HDL", unitl:"mg/dL", countl:"33835"},{dbsource:"lab", labell:"LDH", unitl:"Units/L", countl:"22035"},{dbsource:"lab", labell:"troponin - I", unitl:"ng/mL", countl:"192317"},{dbsource:"lab", labell:"MCV", unitl:"fL", countl:"1105350"},{dbsource:"lab", labell:"Legionella pneumophila Ab", unitl:"-", countl:"28"},{dbsource:"vitalPeriodic", labell:"temperature", unitl:"decimal(11,4)", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"saO2", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"heartRate", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"respiration", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"cvp", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"etCo2", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicSystolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicDiastolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicMean", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"paSystolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"paDiastolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"paMean", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st1", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st2", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st3", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"ICP", unitl:"int", countl:"notCalculated"}];
			var output={};
			EicuModel.getDiagnosis(function(err, resultsIcd){
				if(err){
					return callback(err);
				}
				
				output['icd9Code']=resultsIcd;
				output['items']= itemDetails;

				return callback(null, output);
			});

		}
		catch(e){
			return callback(e);
		}

	},
	getVitalsignData: function(patientId,callback){
		console.log(patientId);
		//get all Data with patient ID
		return EicuModel.getVitalsignData(patientId,function(err, vitalsignReading){
			if(err){
				return callback(err);
			}

			if(vitalsignReading.length<=1){
				return (null, []);
			}
			//Decomposing the Data Set
			var firstnode=vitalsignReading[0];
			var lastnode= vitalsignReading[vitalsignReading.length-1];
			var minTime = firstnode.observationoffset;
			var maxTime = lastnode.observationoffset;
			var totalMinutes=maxTime-minTime;
			var totalHours=totalMinutes/60;

			vitalsingnTempDecomposed=[];

			['temperature','sao2','heartrate','respiration','cvp','etco2','systemicsystolic','systemicdiastolic','systemicmean','pasystolic','padiastolic','pamean','st1','st2','st3','icp'];

			for(i=0;i<totalHours;i++){
				vitalSignAtTimei={};
				vitalSignAtTimei['time']=i*60+minTime;

				['temperature','sao2','heartrate','respiration','cvp','etco2','systemicsystolic','systemicdiastolic','systemicmean','pasystolic','padiastolic','pamean','st1','st2','st3','icp'].forEach(function(vital){
					var temp = {};
					temp.val=-1;
					temp.timeDif=120;
					vitalSignAtTimei[vital]=temp;
				});
			}



			return callback(err, vitalsignReading);
		});
	},
	generateReport: function(inputData,callback){
		try{


			var icd9Codes=inputData.icd9codes;


			//Get all the patients with the icd9codes.
			return EicuModel.getPatientsIdsWithIcd9(icd9Codes,function(err, resultsPatientIdsObj){
				var numberPatientIds=resultsPatientIdsObj.length;
				
				if(numberPatientIds>2000){
					resultsPatientIdsObj=resultsPatientIdsObj.slice(0, 2000);

				}

				var resultsPatientIds=resultsPatientIdsObj.map(function(element){
					return element.patientunitstayid;
				});
				

				async.eachSeries(resultsPatientIds, function(patientId, callback) {

    			// Perform operation on file here.
    				console.log('Processing PatientID ' + patientId);

    				//Get Vital Sign Data 
    				return module.exports.getVitalsignData(patientId, function(err, dataVitalSign){
    					if(err){
    						return callback(err);
    					}
    					console.log("testing");
    					return callback();
    				});
    				
 
    				// if( file.length > 32 ) {
      		// 			console.log('This file name is too long');
      		// 			callback('File name too long');
    				// } else {
      		// 			// Do work to process file here
 			    // 		console.log('File processed');
      		// 			callback();
    				// }
				}, function(err) {
    				// if any of the file processing produced an error, err would equal that error
    				if( err ) {
      					// One of the iterations produced an error.
      					// All processing will now stop.
      					console.log('A file failed to process');
    				} else {
      					console.log('All files have been processed successfully');
    				}
    				return callback(null,resultsPatientIds);
				});				
				

			});
			
			
			// var itemDetails= [{dbsource:"lab", labell:"haptoglobin", unitl:"mg/dL", countl:"4634"},{dbsource:"lab", labell:"Procainamide", unitl:"mcg/mL", countl:"10"},{dbsource:"lab", labell:"PT", unitl:"sec", countl:"389725"},{dbsource:"lab", labell:"glucose", unitl:"mg/dL", countl:"1319496"},{dbsource:"lab", labell:"Mode", unitl:"-", countl:"609"},{dbsource:"lab", labell:"Vancomycin - random", unitl:"mcg/mL", countl:"21366"},{dbsource:"lab", labell:"Tobramycin - trough", unitl:"mcg/mL", countl:"237"},{dbsource:"lab", labell:"potassium", unitl:"mmol/L", countl:"1493261"},{dbsource:"lab", labell:"Base Deficit", unitl:"mEq/L", countl:"66496"},{dbsource:"lab", labell:"Lithium", unitl:"mmol/L", countl:"1375"},{dbsource:"lab", labell:"Pressure Support", unitl:"cm H2O", countl:"24537"},{dbsource:"lab", labell:"Tobramycin - peak", unitl:"mcg/mL", countl:"129"},{dbsource:"lab", labell:"Pressure Control", unitl:"cm H2O", countl:"2300"},{dbsource:"lab", labell:"prealbumin", unitl:"mg/dL", countl:"20010"},{dbsource:"lab", labell:"LPM O2", unitl:"L/min", countl:"28171"},{dbsource:"lab", labell:"Fe", unitl:"mcg/dL", countl:"19608"},{dbsource:"lab", labell:"paO2", unitl:"mm Hg", countl:"420762"},{dbsource:"lab", labell:"ethanol", unitl:"mg/dL", countl:"12555"},{dbsource:"lab", labell:"ammonia", unitl:"mcg/dL", countl:"28793"},{dbsource:"lab", labell:"Vancomycin - peak", unitl:"mcg/mL", countl:"35"},{dbsource:"lab", labell:"cortisol", unitl:"mcg/dL", countl:"9178"},{dbsource:"lab", labell:"protein C", unitl:"%", countl:"702"},{dbsource:"lab", labell:"WBC's in synovial fluid", unitl:"-", countl:"146"},{dbsource:"lab", labell:"ALT (SGPT)", unitl:"Units/L", countl:"434605"},{dbsource:"lab", labell:"Methemoglobin", unitl:"%", countl:"101924"},{dbsource:"lab", labell:"glucose - CSF", unitl:"mg/dL", countl:"4071"},{dbsource:"lab", labell:"Tobramycin - random", unitl:"mcg/mL", countl:"742"},{dbsource:"lab", labell:"protein S", unitl:"%", countl:"643"},{dbsource:"lab", labell:"ionized calcium", unitl:"mg/dL", countl:"149138"},{dbsource:"lab", labell:"serum ketones", unitl:"-", countl:"855"},{dbsource:"lab", labell:"protein - CSF", unitl:"mg/dL", countl:"4138"},{dbsource:"lab", labell:"WBC's in urine", unitl:"-", countl:"24453"},{dbsource:"lab", labell:"Device", unitl:"-", countl:"2704"},{dbsource:"lab", labell:"transferrin", unitl:"mg/dL", countl:"4959"},{dbsource:"lab", labell:"WBC x 1000", unitl:"K/mcL", countl:"1134952"},{dbsource:"lab", labell:"Digoxin", unitl:"ng/mL", countl:"8884"},{dbsource:"lab", labell:"Base Excess", unitl:"mEq/L", countl:"328813"},{dbsource:"lab", labell:"-eos", unitl:"%", countl:"583568"},{dbsource:"lab", labell:"RPR titer", unitl:"-", countl:"3"},{dbsource:"lab", labell:"Peak Airway/Pressure", unitl:"cm H2O", countl:"8827"},{dbsource:"lab", labell:"urinary specific gravity", unitl:"-", countl:"106853"},{dbsource:"lab", labell:"lactate", unitl:"mmol/L", countl:"205591"},{dbsource:"lab", labell:"Amikacin - trough", unitl:"mcg/mL", countl:"94"},{dbsource:"lab", labell:"FiO2", unitl:"%", countl:"360107"},{dbsource:"lab", labell:"T3RU", unitl:"%", countl:"531"},{dbsource:"lab", labell:"WBC's in body fluid", unitl:"-", countl:"2022"},{dbsource:"lab", labell:"Gentamicin - trough", unitl:"mcg/mL", countl:"754"},{dbsource:"lab", labell:"PEEP", unitl:"cm H2O", countl:"112830"},{dbsource:"lab", labell:"chloride", unitl:"mmol/L", countl:"1283839"},{dbsource:"lab", labell:"Spontaneous Rate", unitl:"/min", countl:"9696"},{dbsource:"lab", labell:"Site", unitl:"-", countl:"272"},{dbsource:"lab", labell:"Carboxyhemoglobin", unitl:"%", countl:"100040"},{dbsource:"lab", labell:"WBC's in pleural fluid", unitl:"-", countl:"456"},{dbsource:"lab", labell:"TV", unitl:"mls", countl:"94246"},{dbsource:"lab", labell:"troponin - T", unitl:"ng/mL", countl:"39864"},{dbsource:"lab", labell:"sodium", unitl:"mmol/L", countl:"1393205"},{dbsource:"lab", labell:"Vent Other", unitl:"-", countl:"1653"},{dbsource:"lab", labell:"RBC", unitl:"M/mcL", countl:"1132361"},{dbsource:"lab", labell:"HSV 1&2 IgG AB titer", unitl:"-", countl:"12"},{dbsource:"lab", labell:"urinary sodium", unitl:"mmol/L", countl:"16800"},{dbsource:"lab", labell:"prolactin", unitl:"ng/mL", countl:"789"},{dbsource:"lab", labell:"Lidocaine", unitl:"mcg/mL", countl:"256"},{dbsource:"lab", labell:"anion gap", unitl:"-", countl:"1024278"},{dbsource:"lab", labell:"Vancomycin - trough", unitl:"mcg/mL", countl:"41257"},{dbsource:"lab", labell:"total cholesterol", unitl:"mg/dL", countl:"34514"},{dbsource:"lab", labell:"O2 Sat (%)", unitl:"%", countl:"340062"},{dbsource:"lab", labell:"fibrinogen", unitl:"mg/dL", countl:"38800"},{dbsource:"lab", labell:"Ferritin", unitl:"ng/mL", countl:"15343"},{dbsource:"lab", labell:"T4", unitl:"mcg/dL", countl:"1844"},{dbsource:"lab", labell:"-monos", unitl:"%", countl:"625898"},{dbsource:"lab", labell:"Tacrolimus-FK506", unitl:"ng/mL", countl:"6587"},{dbsource:"lab", labell:"HSV 1&2 IgG AB", unitl:"-", countl:"43"},{dbsource:"lab", labell:"CPK", unitl:"Units/L", countl:"108117"},{dbsource:"lab", labell:"TSH", unitl:"mcU/ml", countl:"45271"},{dbsource:"lab", labell:"BNP", unitl:"pg/mL", countl:"46406"},{dbsource:"lab", labell:"calcium", unitl:"mg/dL", countl:"1226978"},{dbsource:"lab", labell:"paCO2", unitl:"mm Hg", countl:"416467"},{dbsource:"lab", labell:"Clostridium difficile toxin A+B", unitl:"-", countl:"109"},{dbsource:"lab", labell:"myoglobin", unitl:"ng/mL", countl:"3755"},{dbsource:"lab", labell:"cd 4", unitl:"-", countl:"500"},{dbsource:"lab", labell:"Phenytoin", unitl:"mcg/mL", countl:"6108"},{dbsource:"lab", labell:"triglycerides", unitl:"mg/dL", countl:"53344"},{dbsource:"lab", labell:"lipase", unitl:"Units/L", countl:"43304"},{dbsource:"lab", labell:"pH", unitl:"-", countl:"413071"},{dbsource:"lab", labell:"-lymphs", unitl:"%", countl:"630836"},{dbsource:"lab", labell:"WBC's in cerebrospinal fluid", unitl:"-", countl:"3331"},{dbsource:"lab", labell:"MPV", unitl:"fL", countl:"770659"},{dbsource:"lab", labell:"Total CO2", unitl:"-", countl:"185611"},{dbsource:"lab", labell:"Gentamicin - peak", unitl:"mcg/mL", countl:"405"},{dbsource:"lab", labell:"PT - INR", unitl:"ratio", countl:"402092"},{dbsource:"lab", labell:"CPK-MB INDEX", unitl:"%", countl:"29240"},{dbsource:"lab", labell:"TIBC", unitl:"mcg/dL", countl:"14649"},{dbsource:"lab", labell:"free T4", unitl:"ng/dL", countl:"13520"},{dbsource:"lab", labell:"albumin", unitl:"g/dL", countl:"506025"},{dbsource:"lab", labell:"total bilirubin", unitl:"mg/dL", countl:"427307"},{dbsource:"lab", labell:"urinary osmolality", unitl:"mOsm/L", countl:"9414"},{dbsource:"lab", labell:"urinary creatinine", unitl:"mg/dL", countl:"13282"},{dbsource:"lab", labell:"HIV 1&2 AB", unitl:"-", countl:"7"},{dbsource:"lab", labell:"reticulocyte count", unitl:"%", countl:"6304"},{dbsource:"lab", labell:"Fe/TIBC Ratio", unitl:"%", countl:"11317"},{dbsource:"lab", labell:"MCH", unitl:"pg", countl:"1059865"},{dbsource:"lab", labell:"AST (SGOT)", unitl:"Units/L", countl:"437311"},{dbsource:"lab", labell:"CRP", unitl:"mg/dL", countl:"12932"},{dbsource:"lab", labell:"Amikacin - random", unitl:"mcg/mL", countl:"176"},{dbsource:"lab", labell:"Respiratory Rate", unitl:"/min", countl:"49021"},{dbsource:"lab", labell:"magnesium", unitl:"mg/dL", countl:"648642"},{dbsource:"lab", labell:"T3", unitl:"ng/dL", countl:"1092"},{dbsource:"lab", labell:"bedside glucose", unitl:"mg/dL", countl:"3175835"},{dbsource:"lab", labell:"total protein", unitl:"g/dL", countl:"432993"},{dbsource:"lab", labell:"Vitamin B12", unitl:"pg/mL", countl:"14825"},{dbsource:"lab", labell:"Theophylline", unitl:"mcg/mL", countl:"664"},{dbsource:"lab", labell:"PTT ratio", unitl:"ratio", countl:"11041"},{dbsource:"lab", labell:"LDL", unitl:"mg/dL", countl:"24277"},{dbsource:"lab", labell:"-bands", unitl:"%", countl:"75699"},{dbsource:"lab", labell:"creatinine", unitl:"mg/dL", countl:"1277760"},{dbsource:"lab", labell:"BUN", unitl:"mg/dL", countl:"1270484"},{dbsource:"lab", labell:"alkaline phos.", unitl:"Units/L", countl:"429899"},{dbsource:"lab", labell:"HCO3", unitl:"mmol/L", countl:"390863"},{dbsource:"lab", labell:"24 h urine protein", unitl:"mg/24HR", countl:"2870"},{dbsource:"lab", labell:"RDW", unitl:"%", countl:"1048569"},{dbsource:"lab", labell:"WBC's in pericardial fluid", unitl:"-", countl:"47"},{dbsource:"lab", labell:"phosphate", unitl:"mg/dL", countl:"425439"},{dbsource:"lab", labell:"uric acid", unitl:"mg/dL", countl:"13623"},{dbsource:"lab", labell:"Hct", unitl:"%", countl:"1279704"},{dbsource:"lab", labell:"MCHC", unitl:"g/dL", countl:"1104854"},{dbsource:"lab", labell:"PTT", unitl:"sec", countl:"285251"},{dbsource:"lab", labell:"Oxyhemoglobin", unitl:"%", countl:"35738"},{dbsource:"lab", labell:"salicylate", unitl:"mg/dL", countl:"6333"},{dbsource:"lab", labell:"Temperature", unitl:"&#176;C", countl:"113472"},{dbsource:"lab", labell:"bicarbonate", unitl:"mmol/L", countl:"1199866"},{dbsource:"lab", labell:"Hgb", unitl:"g/dL", countl:"1298708"},{dbsource:"lab", labell:"Acetaminophen", unitl:"mcg/mL", countl:"8512"},{dbsource:"lab", labell:"Vent Rate", unitl:"/min", countl:"55243"},{dbsource:"lab", labell:"-basos", unitl:"%", countl:"558783"},{dbsource:"lab", labell:"ESR", unitl:"mm/hr", countl:"13242"},{dbsource:"lab", labell:"ANF/ANA", unitl:"-", countl:"448"},{dbsource:"lab", labell:"Amikacin - peak", unitl:"mcg/mL", countl:"54"},{dbsource:"lab", labell:"Cyclosporin", unitl:"ng/mL", countl:"599"},{dbsource:"lab", labell:"serum osmolality", unitl:"mOsm/kg H2O", countl:"28521"},{dbsource:"lab", labell:"folate", unitl:"ng/mL", countl:"11550"},{dbsource:"lab", labell:"CRP-hs", unitl:"mg/L", countl:"979"},{dbsource:"lab", labell:"amylase", unitl:"Units/L", countl:"16650"},{dbsource:"lab", labell:"WBC's in peritoneal fluid", unitl:"-", countl:"341"},{dbsource:"lab", labell:"direct bilirubin", unitl:"mg/dL", countl:"77732"},{dbsource:"lab", labell:"Carbamazepine", unitl:"mcg/mL", countl:"740"},{dbsource:"lab", labell:"Gentamicin - random", unitl:"mcg/mL", countl:"783"},{dbsource:"lab", labell:"24 h urine urea nitrogen", unitl:"G/24HR", countl:"275"},{dbsource:"lab", labell:"O2 Content", unitl:"mls/dL", countl:"64619"},{dbsource:"lab", labell:"CPK-MB", unitl:"ng/mL", countl:"66958"},{dbsource:"lab", labell:"platelets x 1000", unitl:"K/mcL", countl:"1149488"},{dbsource:"lab", labell:"-polys", unitl:"%", countl:"559192"},{dbsource:"lab", labell:"Phenobarbital", unitl:"mcg/mL", countl:"654"},{dbsource:"lab", labell:"NAPA", unitl:"mcg/mL", countl:"10"},{dbsource:"lab", labell:"HDL", unitl:"mg/dL", countl:"33835"},{dbsource:"lab", labell:"LDH", unitl:"Units/L", countl:"22035"},{dbsource:"lab", labell:"troponin - I", unitl:"ng/mL", countl:"192317"},{dbsource:"lab", labell:"MCV", unitl:"fL", countl:"1105350"},{dbsource:"lab", labell:"Legionella pneumophila Ab", unitl:"-", countl:"28"},{dbsource:"vitalPeriodic", labell:"temperature", unitl:"decimal(11,4)", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"saO2", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"heartRate", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"respiration", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"cvp", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"etCo2", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicSystolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicDiastolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicMean", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"paSystolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"paDiastolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"paMean", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st1", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st2", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st3", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"ICP", unitl:"int", countl:"notCalculated"}];
			// var output={};
			// EicuModel.getDiagnosis(function(err, resultsIcd){
			// 	if(err){
			// 		return callback(err);
			// 	}
				
			// 	output['icd9Code']=resultsIcd;
			// 	output['items']= itemDetails;

			// 	return callback(null, output);
			// });

		}
		catch(e){
			return callback(e);
		}

	}

}

