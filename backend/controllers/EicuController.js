var CharteventsModel= require('../models/CharteventsModel.js');
var D_itemsModel= require('../models/D_itemsModel.js');

var EicuModel= require('../models/EicuModel.js');
var async = require('async');


var json2csv = require('json2csv');
var fs = require('fs');


MillisecondsInDay=86400000;
module.exports = {
	getInitialData: function(callback){
		try{
			
			var itemDetails= [{dbsource:"lab", labell:"haptoglobin", unitl:"mg/dL", countl:"4634"},{dbsource:"lab", labell:"Procainamide", unitl:"mcg/mL", countl:"10"},{dbsource:"lab", labell:"PT", unitl:"sec", countl:"389725"},{dbsource:"lab", labell:"glucose", unitl:"mg/dL", countl:"1319496"},{dbsource:"lab", labell:"Mode", unitl:"-", countl:"609"},{dbsource:"lab", labell:"Vancomycin - random", unitl:"mcg/mL", countl:"21366"},{dbsource:"lab", labell:"Tobramycin - trough", unitl:"mcg/mL", countl:"237"},{dbsource:"lab", labell:"potassium", unitl:"mmol/L", countl:"1493261"},{dbsource:"lab", labell:"Base Deficit", unitl:"mEq/L", countl:"66496"},{dbsource:"lab", labell:"Lithium", unitl:"mmol/L", countl:"1375"},{dbsource:"lab", labell:"Pressure Support", unitl:"cm H2O", countl:"24537"},{dbsource:"lab", labell:"Tobramycin - peak", unitl:"mcg/mL", countl:"129"},{dbsource:"lab", labell:"Pressure Control", unitl:"cm H2O", countl:"2300"},{dbsource:"lab", labell:"prealbumin", unitl:"mg/dL", countl:"20010"},{dbsource:"lab", labell:"LPM O2", unitl:"L/min", countl:"28171"},{dbsource:"lab", labell:"Fe", unitl:"mcg/dL", countl:"19608"},{dbsource:"lab", labell:"paO2", unitl:"mm Hg", countl:"420762"},{dbsource:"lab", labell:"ethanol", unitl:"mg/dL", countl:"12555"},{dbsource:"lab", labell:"ammonia", unitl:"mcg/dL", countl:"28793"},{dbsource:"lab", labell:"Vancomycin - peak", unitl:"mcg/mL", countl:"35"},{dbsource:"lab", labell:"cortisol", unitl:"mcg/dL", countl:"9178"},{dbsource:"lab", labell:"protein C", unitl:"%", countl:"702"},{dbsource:"lab", labell:"WBC's in synovial fluid", unitl:"-", countl:"146"},{dbsource:"lab", labell:"ALT (SGPT)", unitl:"Units/L", countl:"434605"},{dbsource:"lab", labell:"Methemoglobin", unitl:"%", countl:"101924"},{dbsource:"lab", labell:"glucose - CSF", unitl:"mg/dL", countl:"4071"},{dbsource:"lab", labell:"Tobramycin - random", unitl:"mcg/mL", countl:"742"},{dbsource:"lab", labell:"protein S", unitl:"%", countl:"643"},{dbsource:"lab", labell:"ionized calcium", unitl:"mg/dL", countl:"149138"},{dbsource:"lab", labell:"serum ketones", unitl:"-", countl:"855"},{dbsource:"lab", labell:"protein - CSF", unitl:"mg/dL", countl:"4138"},{dbsource:"lab", labell:"WBC's in urine", unitl:"-", countl:"24453"},{dbsource:"lab", labell:"Device", unitl:"-", countl:"2704"},{dbsource:"lab", labell:"transferrin", unitl:"mg/dL", countl:"4959"},{dbsource:"lab", labell:"WBC x 1000", unitl:"K/mcL", countl:"1134952"},{dbsource:"lab", labell:"Digoxin", unitl:"ng/mL", countl:"8884"},{dbsource:"lab", labell:"Base Excess", unitl:"mEq/L", countl:"328813"},{dbsource:"lab", labell:"-eos", unitl:"%", countl:"583568"},{dbsource:"lab", labell:"RPR titer", unitl:"-", countl:"3"},{dbsource:"lab", labell:"Peak Airway/Pressure", unitl:"cm H2O", countl:"8827"},{dbsource:"lab", labell:"urinary specific gravity", unitl:"-", countl:"106853"},{dbsource:"lab", labell:"lactate", unitl:"mmol/L", countl:"205591"},{dbsource:"lab", labell:"Amikacin - trough", unitl:"mcg/mL", countl:"94"},{dbsource:"lab", labell:"FiO2", unitl:"%", countl:"360107"},{dbsource:"lab", labell:"T3RU", unitl:"%", countl:"531"},{dbsource:"lab", labell:"WBC's in body fluid", unitl:"-", countl:"2022"},{dbsource:"lab", labell:"Gentamicin - trough", unitl:"mcg/mL", countl:"754"},{dbsource:"lab", labell:"PEEP", unitl:"cm H2O", countl:"112830"},{dbsource:"lab", labell:"chloride", unitl:"mmol/L", countl:"1283839"},{dbsource:"lab", labell:"Spontaneous Rate", unitl:"/min", countl:"9696"},{dbsource:"lab", labell:"Site", unitl:"-", countl:"272"},{dbsource:"lab", labell:"Carboxyhemoglobin", unitl:"%", countl:"100040"},{dbsource:"lab", labell:"WBC's in pleural fluid", unitl:"-", countl:"456"},{dbsource:"lab", labell:"TV", unitl:"mls", countl:"94246"},{dbsource:"lab", labell:"troponin - T", unitl:"ng/mL", countl:"39864"},{dbsource:"lab", labell:"sodium", unitl:"mmol/L", countl:"1393205"},{dbsource:"lab", labell:"Vent Other", unitl:"-", countl:"1653"},{dbsource:"lab", labell:"RBC", unitl:"M/mcL", countl:"1132361"},{dbsource:"lab", labell:"HSV 1&2 IgG AB titer", unitl:"-", countl:"12"},{dbsource:"lab", labell:"urinary sodium", unitl:"mmol/L", countl:"16800"},{dbsource:"lab", labell:"prolactin", unitl:"ng/mL", countl:"789"},{dbsource:"lab", labell:"Lidocaine", unitl:"mcg/mL", countl:"256"},{dbsource:"lab", labell:"anion gap", unitl:"-", countl:"1024278"},{dbsource:"lab", labell:"Vancomycin - trough", unitl:"mcg/mL", countl:"41257"},{dbsource:"lab", labell:"total cholesterol", unitl:"mg/dL", countl:"34514"},{dbsource:"lab", labell:"O2 Sat (%)", unitl:"%", countl:"340062"},{dbsource:"lab", labell:"fibrinogen", unitl:"mg/dL", countl:"38800"},{dbsource:"lab", labell:"Ferritin", unitl:"ng/mL", countl:"15343"},{dbsource:"lab", labell:"T4", unitl:"mcg/dL", countl:"1844"},{dbsource:"lab", labell:"-monos", unitl:"%", countl:"625898"},{dbsource:"lab", labell:"Tacrolimus-FK506", unitl:"ng/mL", countl:"6587"},{dbsource:"lab", labell:"HSV 1&2 IgG AB", unitl:"-", countl:"43"},{dbsource:"lab", labell:"CPK", unitl:"Units/L", countl:"108117"},{dbsource:"lab", labell:"TSH", unitl:"mcU/ml", countl:"45271"},{dbsource:"lab", labell:"BNP", unitl:"pg/mL", countl:"46406"},{dbsource:"lab", labell:"calcium", unitl:"mg/dL", countl:"1226978"},{dbsource:"lab", labell:"paCO2", unitl:"mm Hg", countl:"416467"},{dbsource:"lab", labell:"Clostridium difficile toxin A+B", unitl:"-", countl:"109"},{dbsource:"lab", labell:"myoglobin", unitl:"ng/mL", countl:"3755"},{dbsource:"lab", labell:"cd 4", unitl:"-", countl:"500"},{dbsource:"lab", labell:"Phenytoin", unitl:"mcg/mL", countl:"6108"},{dbsource:"lab", labell:"triglycerides", unitl:"mg/dL", countl:"53344"},{dbsource:"lab", labell:"lipase", unitl:"Units/L", countl:"43304"},{dbsource:"lab", labell:"pH", unitl:"-", countl:"413071"},{dbsource:"lab", labell:"-lymphs", unitl:"%", countl:"630836"},{dbsource:"lab", labell:"WBC's in cerebrospinal fluid", unitl:"-", countl:"3331"},{dbsource:"lab", labell:"MPV", unitl:"fL", countl:"770659"},{dbsource:"lab", labell:"Total CO2", unitl:"-", countl:"185611"},{dbsource:"lab", labell:"Gentamicin - peak", unitl:"mcg/mL", countl:"405"},{dbsource:"lab", labell:"PT - INR", unitl:"ratio", countl:"402092"},{dbsource:"lab", labell:"CPK-MB INDEX", unitl:"%", countl:"29240"},{dbsource:"lab", labell:"TIBC", unitl:"mcg/dL", countl:"14649"},{dbsource:"lab", labell:"free T4", unitl:"ng/dL", countl:"13520"},{dbsource:"lab", labell:"albumin", unitl:"g/dL", countl:"506025"},{dbsource:"lab", labell:"total bilirubin", unitl:"mg/dL", countl:"427307"},{dbsource:"lab", labell:"urinary osmolality", unitl:"mOsm/L", countl:"9414"},{dbsource:"lab", labell:"urinary creatinine", unitl:"mg/dL", countl:"13282"},{dbsource:"lab", labell:"HIV 1&2 AB", unitl:"-", countl:"7"},{dbsource:"lab", labell:"reticulocyte count", unitl:"%", countl:"6304"},{dbsource:"lab", labell:"Fe/TIBC Ratio", unitl:"%", countl:"11317"},{dbsource:"lab", labell:"MCH", unitl:"pg", countl:"1059865"},{dbsource:"lab", labell:"AST (SGOT)", unitl:"Units/L", countl:"437311"},{dbsource:"lab", labell:"CRP", unitl:"mg/dL", countl:"12932"},{dbsource:"lab", labell:"Amikacin - random", unitl:"mcg/mL", countl:"176"},{dbsource:"lab", labell:"Respiratory Rate", unitl:"/min", countl:"49021"},{dbsource:"lab", labell:"magnesium", unitl:"mg/dL", countl:"648642"},{dbsource:"lab", labell:"T3", unitl:"ng/dL", countl:"1092"},{dbsource:"lab", labell:"bedside glucose", unitl:"mg/dL", countl:"3175835"},{dbsource:"lab", labell:"total protein", unitl:"g/dL", countl:"432993"},{dbsource:"lab", labell:"Vitamin B12", unitl:"pg/mL", countl:"14825"},{dbsource:"lab", labell:"Theophylline", unitl:"mcg/mL", countl:"664"},{dbsource:"lab", labell:"PTT ratio", unitl:"ratio", countl:"11041"},{dbsource:"lab", labell:"LDL", unitl:"mg/dL", countl:"24277"},{dbsource:"lab", labell:"-bands", unitl:"%", countl:"75699"},{dbsource:"lab", labell:"creatinine", unitl:"mg/dL", countl:"1277760"},{dbsource:"lab", labell:"BUN", unitl:"mg/dL", countl:"1270484"},{dbsource:"lab", labell:"alkaline phos.", unitl:"Units/L", countl:"429899"},{dbsource:"lab", labell:"HCO3", unitl:"mmol/L", countl:"390863"},{dbsource:"lab", labell:"24 h urine protein", unitl:"mg/24HR", countl:"2870"},{dbsource:"lab", labell:"RDW", unitl:"%", countl:"1048569"},{dbsource:"lab", labell:"WBC's in pericardial fluid", unitl:"-", countl:"47"},{dbsource:"lab", labell:"phosphate", unitl:"mg/dL", countl:"425439"},{dbsource:"lab", labell:"uric acid", unitl:"mg/dL", countl:"13623"},{dbsource:"lab", labell:"Hct", unitl:"%", countl:"1279704"},{dbsource:"lab", labell:"MCHC", unitl:"g/dL", countl:"1104854"},{dbsource:"lab", labell:"PTT", unitl:"sec", countl:"285251"},{dbsource:"lab", labell:"Oxyhemoglobin", unitl:"%", countl:"35738"},{dbsource:"lab", labell:"salicylate", unitl:"mg/dL", countl:"6333"},{dbsource:"lab", labell:"Temperature", unitl:"&#176;C", countl:"113472"},{dbsource:"lab", labell:"bicarbonate", unitl:"mmol/L", countl:"1199866"},{dbsource:"lab", labell:"Hgb", unitl:"g/dL", countl:"1298708"},{dbsource:"lab", labell:"Acetaminophen", unitl:"mcg/mL", countl:"8512"},{dbsource:"lab", labell:"Vent Rate", unitl:"/min", countl:"55243"},{dbsource:"lab", labell:"-basos", unitl:"%", countl:"558783"},{dbsource:"lab", labell:"ESR", unitl:"mm/hr", countl:"13242"},{dbsource:"lab", labell:"ANF/ANA", unitl:"-", countl:"448"},{dbsource:"lab", labell:"Amikacin - peak", unitl:"mcg/mL", countl:"54"},{dbsource:"lab", labell:"Cyclosporin", unitl:"ng/mL", countl:"599"},{dbsource:"lab", labell:"serum osmolality", unitl:"mOsm/kg H2O", countl:"28521"},{dbsource:"lab", labell:"folate", unitl:"ng/mL", countl:"11550"},{dbsource:"lab", labell:"CRP-hs", unitl:"mg/L", countl:"979"},{dbsource:"lab", labell:"amylase", unitl:"Units/L", countl:"16650"},{dbsource:"lab", labell:"WBC's in peritoneal fluid", unitl:"-", countl:"341"},{dbsource:"lab", labell:"direct bilirubin", unitl:"mg/dL", countl:"77732"},{dbsource:"lab", labell:"Carbamazepine", unitl:"mcg/mL", countl:"740"},{dbsource:"lab", labell:"Gentamicin - random", unitl:"mcg/mL", countl:"783"},{dbsource:"lab", labell:"24 h urine urea nitrogen", unitl:"G/24HR", countl:"275"},{dbsource:"lab", labell:"O2 Content", unitl:"mls/dL", countl:"64619"},{dbsource:"lab", labell:"CPK-MB", unitl:"ng/mL", countl:"66958"},{dbsource:"lab", labell:"platelets x 1000", unitl:"K/mcL", countl:"1149488"},{dbsource:"lab", labell:"-polys", unitl:"%", countl:"559192"},{dbsource:"lab", labell:"Phenobarbital", unitl:"mcg/mL", countl:"654"},{dbsource:"lab", labell:"NAPA", unitl:"mcg/mL", countl:"10"},{dbsource:"lab", labell:"HDL", unitl:"mg/dL", countl:"33835"},{dbsource:"lab", labell:"LDH", unitl:"Units/L", countl:"22035"},{dbsource:"lab", labell:"troponin - I", unitl:"ng/mL", countl:"192317"},{dbsource:"lab", labell:"MCV", unitl:"fL", countl:"1105350"},{dbsource:"lab", labell:"Legionella pneumophila Ab", unitl:"-", countl:"28"},{dbsource:"vitalPeriodic", labell:"temperature", unitl:"decimal(11,4)", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"sao2", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"heartrate", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"respiration", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"cvp", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"etco2", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicsystolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicdiastolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"systemicmean", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"pasystolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"padiastolic", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"pamean", unitl:"int", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st1", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st2", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"st3", unitl:"real", countl:"notCalculated"},{dbsource:"vitalPeriodic", labell:"icp", unitl:"int", countl:"notCalculated"}, {dbsource:"vitalPeriodic", labell:"map", unitl:"int", countl:"notCalculated"}];
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
	trimNullData: function(inputHeaders,targetHeaders, dataVitalSignLabDiagnosisPredictHist, callback){

		var trimmedOutput=[];

		dataVitalSignLabDiagnosisPredictHist.forEach(function(eachRow){
			var flagremove=0;

			var flaginput=1;

			inputHeaders.forEach(function(header){
				if(eachRow[header]!=-1){
					flaginput=0;
				}
			});


			//console.log(targetHeaders);
			targetHeaders.forEach(function(header){
				if(eachRow[header]==-1){
					flagremove=1;
				}
			});

			if(flagremove==0 && flaginput==0){
				trimmedOutput.push(eachRow);
			}

		});


		return callback(null, trimmedOutput);

	},
	
	getPatients: function(icd9codes, excludeIcd9Codes,callback){

		return EicuModel.getPatientsIdsWithIcd9(icd9codes,excludeIcd9Codes,function(err, resultsPatientIdsObjwithDiagnosis){

			console.log(resultsPatientIdsObjwithDiagnosis.length);
			return EicuModel.getPatientsIdsWithoutIcd9(icd9codes,excludeIcd9Codes,function(err, resultsPatientIdsObjwithoutDiagnosis){
				console.log(resultsPatientIdsObjwithoutDiagnosis.length);
				
				// minLengthPatientIds=Math.min(resultsPatientIdsObjwithDiagnosis.length, resultsPatientIdsObjwithoutDiagnosis.length);


				// var trainWithDiagnosis=resultsPatientIdsObjwithDiagnosis.slice(0, Math.floor(minLengthPatientIds/2));
				// var validationWithDiagnosis=resultsPatientIdsObjwithDiagnosis.slice(Math.floor(minLengthPatientIds/2)+1, minLengthPatientIds);

				// var trainWithoutDiagnosis=resultsPatientIdsObjwithoutDiagnosis.slice(0, Math.floor(minLengthPatientIds));
				// var validationWithoutDiagnosis=resultsPatientIdsObjwithoutDiagnosis.slice(Math.floor(minLengthPatientIds)+1, minLengthPatientIds*2);



				//minLengthPatientIds=Math.min(resultsPatientIdsObjwithDiagnosis.length, resultsPatientIdsObjwithoutDiagnosis.length);


				var trainWithDiagnosis=resultsPatientIdsObjwithDiagnosis.slice(0, Math.floor(resultsPatientIdsObjwithDiagnosis.length/2));
				var validationWithDiagnosis=resultsPatientIdsObjwithDiagnosis.slice(Math.floor(resultsPatientIdsObjwithDiagnosis.length/2)+1, resultsPatientIdsObjwithDiagnosis.length);

				var trainWithoutDiagnosis=resultsPatientIdsObjwithoutDiagnosis.slice(0, Math.floor(resultsPatientIdsObjwithoutDiagnosis.length)/2);
				var validationWithoutDiagnosis=resultsPatientIdsObjwithoutDiagnosis.slice(Math.floor(resultsPatientIdsObjwithoutDiagnosis.length)/2+1, resultsPatientIdsObjwithoutDiagnosis.length);


				// var trainWithDiagnosis=resultsPatientIdsObjwithDiagnosis.slice(0, Math.floor(minLengthPatientIds/2));
				// var validationWithDiagnosis=resultsPatientIdsObjwithDiagnosis.slice(Math.floor(minLengthPatientIds/2)+1, minLengthPatientIds);

				// var trainWithoutDiagnosis=resultsPatientIdsObjwithoutDiagnosis.slice(0, Math.floor(minLengthPatientIds));
				// var validationWithoutDiagnosis=resultsPatientIdsObjwithoutDiagnosis.slice(Math.floor(minLengthPatientIds)+1, minLengthPatientIds*2);


				var trainWithDiagnosis=resultsPatientIdsObjwithDiagnosis;
				var validationWithDiagnosis=[];

				var trainWithoutDiagnosis=resultsPatientIdsObjwithoutDiagnosis;
				var validationWithoutDiagnosis=[];



				var patientIds=[];
				var patientIdDic={};


				var maxSoFar=Math.max(trainWithDiagnosis.length,validationWithDiagnosis.length, trainWithoutDiagnosis.length,validationWithoutDiagnosis.length);

				

				trainWithDiagnosisLength=trainWithDiagnosis.length;
				trainWithoutDiagnosisLength=trainWithoutDiagnosis.length;
				validationWithDiagnosisLength=validationWithDiagnosis.length
				validationWithoutDiagnosisLength=validationWithoutDiagnosis.length;
				for(var i=0;i<maxSoFar;i++){
					

					if(i<trainWithDiagnosisLength){
						patientIds.push(trainWithDiagnosis[i].patientunitstayid);
						patientIdDic[trainWithDiagnosis[i].patientunitstayid]={
							file:'train',
							diagnosis:false
						}
					}
					if(i<trainWithoutDiagnosisLength){
						patientIds.push(trainWithoutDiagnosis[i].patientunitstayid);
						patientIdDic[trainWithoutDiagnosis[i].patientunitstayid]={
							file:'train',
							diagnosis:false
						}
					}

					if(i<validationWithDiagnosisLength){
						patientIds.push(validationWithDiagnosis[i].patientunitstayid);
						patientIdDic[validationWithDiagnosis[i].patientunitstayid]={
							file:'train',
							diagnosis:false
						}
					}
					if(i<validationWithoutDiagnosisLength){
						patientIds.push(validationWithoutDiagnosis[i].patientunitstayid);
						patientIdDic[validationWithoutDiagnosis[i].patientunitstayid]={
							file:'train',
							diagnosis:false
						}
					}

				}


				console.log('hamza');

	


				return callback(null, patientIds, patientIdDic);
				
			
			// 	var resultsPatientIds=resultsPatientIdsObj.map(function(element){
			// 		return element.patientunitstayid;
			// 	});
			// return callback(null, resultsPatientIdsObjwithDiagnosis);


		});

		});

	},
	getDataHeaders: function(inputFeatures, outputFeatures, icd9codes,microlabsFeatures, callback){
		var headers=["patientunitstayid","time", "diagnosis", "sex","age","lengthofStay_icu", "lengthofStay_hospital","died","dischargeTime"];
		

		var inputHeaders=[];
		var targetHeaders=[];

		icd9codes.forEach(function(icd9code){
			headers.push(icd9code);
			inputHeaders.push(icd9code);
		})

		
		Object.keys(inputFeatures).forEach(function(label){
			headers.push(label);
			inputHeaders.push(label);
		});

		microlabsFeatures.forEach(function(label){
			headers.push(label);
			inputHeaders.push(label);
		})

		Object.keys(inputFeatures).forEach(function(label){
			for(i=1;i<=inputFeatures[label].history;i++){
				headers.push(label+'_hist_'+i);
				inputHeaders.push(label+'_hist_'+i);
			}
		});

		Object.keys(outputFeatures).forEach(function(label){
			for(i=1;i<=outputFeatures[label].future;i++){
				headers.push(label+'_fut_'+i);
				targetHeaders.push(label+'_fut_'+i);
			}
		});


		return callback(null, headers, inputHeaders, targetHeaders);

	}, 
	getDataWithHistoryPrediction: function(dataVitalSignLabDiagnosis, inputFeatures, outputFeatures,callback){
		

		var dataVitalSignLabDiagnosisLength= dataVitalSignLabDiagnosis.length;
		Object.keys(inputFeatures).forEach(function(label){
			//label=label.toLowerCase();
			if(inputFeatures[label].history>0){
				var hist=inputFeatures[label].history;
				for(var i =1;i<=hist;i++){
					dataVitalSignLabDiagnosis.forEach(function(eachData,index){
						dataVitalSignLabDiagnosis[index][label+'_hist_'+i]=-1;
						histInd=index-i;
						if(histInd>=0 && histInd<dataVitalSignLabDiagnosisLength){
							dataVitalSignLabDiagnosis[index][label+'_hist_'+i]=dataVitalSignLabDiagnosis[histInd][label];
						}
					});
				}
			}
		});


		Object.keys(outputFeatures).forEach(function(label){
			//label=label.toLowerCase();
			if(outputFeatures[label].future>0){
				var fut=outputFeatures[label].future;
				for(var i =1;i<=fut;i++){
					dataVitalSignLabDiagnosis.forEach(function(eachData,index){
						dataVitalSignLabDiagnosis[index][label+'_fut_'+i]=-1;
						futInd=index+i;
						if(futInd>=0 && futInd<dataVitalSignLabDiagnosisLength){
							dataVitalSignLabDiagnosis[index][label+'_fut_'+i]=dataVitalSignLabDiagnosis[futInd][label];
						}
					});
				}
			}
		});


		return callback(null, dataVitalSignLabDiagnosis);

	}, 




	getMergeDiagnosisPatientTable: function(patientId,dataVitalSignLab,icd9codes,callback){
		
		var dataVitalSignLabLength=dataVitalSignLab.length;
		//get all LabData with patient ID with items in the labItems
		return EicuModel.getDiagnosisData(patientId, icd9codes,function(err,diagnosisData){
			if(err){
				return callback(err);
			}

			
			
			var minTime=dataVitalSignLab[0].time;
			var diagnosis=0;
			if(diagnosisData.length>0){
				diagnosis=1;
			}

			dataVitalSignLab.forEach(function(eachVitalSign,index){
				
				dataVitalSignLab[index]['diagnosis']=diagnosis;
				icd9codes.forEach(function(icd9code){
					dataVitalSignLab[index][icd9code]=0

				});

				
			});

			var firstdiagnosis=1000000000000000000;
			var firstSepsisDiagnosis=1000000000000000000;
			var firstSepticShockDiagnosis=1000000000000000000;
			//'785.52, R65.21',na=False) | icd9codes.str.match('038.9, 785.52, R65.21',na=False) | icd9codes.str.match('785.52, 785.52, R65.21',na=False)
			// ('995.92, R65.20', na=False) | icd9codes.str.match('785.59, 038.9, 995.92', na=False) | icd9codes.str.match('785.59, 038.9, 995.92, R65.21', na=False) | icd9codes.str.match('995.91, R65', na=False)
			diagnosisData.forEach(function(eachdiagnosis){

				var time=eachdiagnosis.diagnosisoffset;
				var diagnosisstring=eachdiagnosis.diagnosisstring;
				var icd9code= eachdiagnosis.icd9code;


				
				var firstdiagnosis=Math.min(firstdiagnosis,time);
				
				var ind= Math.round((time-minTime)/60);

				if(ind>=0 && ind < dataVitalSignLabLength){	
					dataVitalSignLab[ind][icd9code]=1;
				}
			});
			
			return EicuModel.getPatientData(patientId ,function(err,patientData){
					var sex=-1;
					var age = -1;
					var lengthofStay_icu=-1;
					var lengthofStay_hospital=-1;
					var died=-1;
					var dischargeTime=-1;
					var patientHealthSystemStayID=-1;
					var hospitaldischargeoffset=-1;
					var hospitaladmitoffset=-1; 


					//patientHealthSystemStayID, hospitaldischargeoffset, hospitaladmitoffset


					if(patientData.length>0){
						if(patientData[0].gender=='Male'){
							sex=1;
						}else{
							sex=0;
						}


						age=patientData[0].age;
						dischargeTime=patientData[0].unitdischargeoffset;
						hospitaladmitoffset=patientData[0].hospitaladmitoffset;
						hospitaldischargeoffset=patientData[0].hospitaldischargeoffset;
						patientHealthSystemStayID=patientData[0].patientHealthSystemStayID;

				


						
						lengthofStay_hospital=(hospitaldischargeoffset-hospitaladmitoffset)/60;

						if(patientData[0].hospitaldischargestatus=='Alive'){
							died=0;
						}else if(patientData[0].hospitaldischargestatus=='Expired'){
							died=1;
						}

						
						lengthofStay_icu=patientData[0].unitdischargeoffset/60;
						

						
					}
					dataVitalSignLab.forEach(function(eachVitalSign,index){
						dataVitalSignLab[index]['sex']=sex;
						dataVitalSignLab[index]['age']=age;
						dataVitalSignLab[index]['lengthofStay_icu']=lengthofStay_icu;
						dataVitalSignLab[index]['patientHealthSystemStayID']=patientHealthSystemStayID;
						dataVitalSignLab[index]['lengthofStay_hospital']=lengthofStay_hospital;

						dataVitalSignLab[index]['died']=died;
						dataVitalSignLab[index]['dischargeTime']=dischargeTime;
						dataVitalSignLab[index]['sex']=sex;

					});
					return callback(err, dataVitalSignLab);
			});
		});
	}, 
	getsofaData: function(sofa, vassodata, callback){
		if(sofa==0){
			return callback(null, vassodata);
		}
		var pao2=-1;
		var fio2=-1;
		var pafiFio2ration=-1;
		var gcs=-1;
		var map=-1;
		var dopamine=-1
		var dobutamine=-1
		var epinephrine=-1;
		var norepinephrine=-1;
		var bilirubin=-1;
		var platelets=-1;
		var creatinine=-1;
		var systolicBP=-1;
		var isVent=0;
		var urine=-1;
		var pulse=-1;
		var resp=-1;
		var lastsofa=0;
		var sepsis3=0;
		var sepsis3SepticShock=0;
		var lactate=-1;


		vassodata.forEach(function(data){
			if(data["paO2"]&&data["paO2"]>0){
				pao2=data["paO2"]
			}
			if(data["FiO2"]&&data["FiO2"]>0){
				fio2=data["FiO2"]
			}
			if(data["gcs"]&&data["gcs"]>0){
				gcs=data["gcs"]
			}
			if(data["map"]&&data["map"]>0){
				map=data["map"]
			}
			if(data["rate_dopamine"]&&data["rate_dopamine"]>0){
				dopamine=data["rate_dopamine"]
			}
			if(data["rate_dobutamine"]&&data["rate_dobutamine"]>0){
				dobutamine=data["rate_dobutamine"]
			}
			if(data["rate_epinephrine"]&&data["rate_epinephrine"]>0){
				epinephrine=data["rate_epinephrine"]
			}
			if(data["rate_norepinephrine"]>0){
				norepinephrine=data["rate_norepinephrine"]
			}
			if(data["total bilirubin"]&&data["total bilirubin"]>0){
				bilirubin=data["total bilirubin"]
			}
			if(data["platelets x 1000"]&&data["platelets x 1000"]>0){
				platelets=data["platelets x 1000"]
			}
			if(data["creatinine"]&&data["creatinine"]>0){
				creatinine=data["creatinine"]
			}
			if(data["systemicsystolic"]&&data["systemicsystolic"]>0){
				systolicBP=data["systemicsystolic"]
			}
			if(data["Vent Rate"]&&data["Vent Rate"]>0){
				isVent=1;
			}
			if(data["urine"]&&data["urine"]>0){
				urine=data["urine"];
			}
			if(data["heartrate"]&&data["heartrate"]>0){
				pulse=data["heartrate"];
			}

			if(data["respiration"]&&data["respiration"]>0){
				resp=data["respiration"];
			}

			if(data["lactate"]&&data["lactate"]>0){
				lactate=data["lactate"];
			}


			var respiratory=0;
			var nervous=0;
			var cardiovascular=0;
			var liver=0;
			var coagulation=0;
			var kidneys=0;

			

			if(pao2>0 && fio2>0){

				pafiFio2ration=(pao2*100)/fio2;
				
				if(pafiFio2ration>=400){
					respiratory=0;

				}
				if(pafiFio2ration<400){
					respiratory=1;

				}
				if(pafiFio2ration<300){
					respiratory=2;
				}
				if(pafiFio2ration<200){
					respiratory=3;
				}

				if(pafiFio2ration<100){
					respiratory=4;
				}
			}

			if(gcs>0){
				if(gcs<6){
					nervous=4;
				}
				else if(gcs>=6 && gcs<10){
					nervous=3
				}else if(gcs>=10 && gcs<13){
					nervous=2
				}else if(gcs>=13 && gcs<15){
					nervous=1
				}else{
					nervous=0;
				}
			}
			if(map>0){
				if(map>=70){
					cardiovascular=0;
				}else{
					cardiovascular=1;
					if(dopamine>0 || dobutamine>0){
						cardiovascular=2;
					}
					if(dopamine>5 || epinephrine>0 || norepinephrine>0){
						cardiovascular=3;
					}
					if(dopamine>15 || epinephrine>0.1 || norepinephrine>0.1){
						cardiovascular=4;
					}

				}
			}

			if(bilirubin>0){
				if(bilirubin>=1.2){
		        	liver=1;
		        }
		        if(bilirubin>=2.0){
		        	liver=2;
		        }

		        if(bilirubin>=6.0){
		        	liver=3;
		        }
		        if(bilirubin>=12.0){
		        	liver=4;
		        }	
			}


			if(creatinine>0){
				
				if(creatinine>=1.2 && creatinine<2.0){
					kidneys=1;
				}
				if(creatinine>=2.0 && creatinine<3.5){
					kidneys=2
				}
				if(creatinine>=3.5 && creatinine<5 ){
					kidneys=3
				}
				if(creatinine>=5){
					kidneys=4
				}


				


			}	

			// if(urine>0){
			// 	if(urine<500){
			// 		kidneys=3;
			// 	}
			// 	if(urine<200){
			// 		kidneys=4;
			// 	}
			// }	
	        
	        if(platelets>0){
	        	if(platelets<150){
	        		coagulation=1
	        	}

	        	if(platelets<100){
	        		coagulation=2
	        	}
	        	if(platelets<50){
	        		coagulation=3
	        	}
	        	if(platelets<20){
	        		coagulation=4
	        	}
	        }

	        
	        var sofa=coagulation+kidneys+liver+cardiovascular+nervous+respiratory;
	        var delSofa=sofa-lastsofa;
	        var qsofa=0;

	        if(cardiovascular>=2 && lactate>=2){
	        	sepsis3SepticShock=1;
	        }

	        lastsofa=sofa;

	        if(delSofa>=2){
	        	sepsis3=1;
	        }

	        if(systolicBP<=100 && systolicBP>0){
	        	qsofa=qsofa+1;
	        }

	        if(resp>0 && resp>=22){
	        	qsofa=qsofa+1;
	        }

	        if(gcs>0 && gcs<15){
	        	qsofa=qsofa+1;
	        }

	        data["pao2Fio2ratio"]=pafiFio2ration;
	        data["cardiovascular"]=cardiovascular;
	        data["kidneys"]=kidneys;
	        data["coagulation"]=coagulation;
	        data["liver"]=liver;
	        data["respiratory"]=respiratory;
	        data["nervous"]=nervous;
	        data["sofa"]=sofa;
	        data["qsofa"]=qsofa;
	        data['delSofa']=delSofa;
	        data['sepsis3']=sepsis3;
	        data['sepsis3SepticShock']=sepsis3SepticShock;
	        

		});
		return callback(null, vassodata);



	},
	getVentGcsData: function(patientId,data,microlabsFeatures,callback){
		return EicuModel.getventData(patientId,function (err,ventData){
			if(err){
				return callback(err);
			}

			var isVent=0;
			if(ventData.length>0 && ventData[0].mechvent){
					isVent=ventData[0].mechvent;
				}


			data.forEach(function(eachData){
				eachData['isVent']=isVent;
				eachData['gcs']=-1;
				microlabsFeatures.forEach(function(eachFeature){
					eachData[eachFeature]=-1;
				});



			})

			return EicuModel.getGcsData(patientId,function(err,ventData){
				if(err){
					return callback(err);
				}

				
			
				
				var dataLength=data.length;
				var minTime=data[0].time;

				ventData.forEach(function(eachventData){
					
					var time=eachventData.nursingchartoffset;
					var val= Number(eachventData.gcs);
					var ind= Math.round((time-minTime)/60);

					if(ind>=0 && ind < dataLength && val != NaN && val>0){
						data[ind]["gcs"]=val;
					}
				});

				return EicuModel.getMicroLabsData(patientId,microlabsFeatures,function(err,microlabData){
					var dataLength=data.length;
					var minTime=data[0].time;

					microlabData.forEach(function(eachMicroLabData){
						var featureName=eachMicroLabData.culturesite;
						var time=eachMicroLabData.culturetakenoffset;
						var val= 1;
						var ind= Math.round((time-minTime)/60);

						if(ind<0){
							ind=0;
						}

						if(ind>=0 && ind < dataLength && val != NaN && val>0){
							data[ind][featureName]=val;
						}
					});
					return callback(null,data);



				})



				
				})


		});
	},
	getVasData:function(patientId,vassopressors,data,callback){
		if(vassopressors==0){
			return callback(null, data);
		}

		var dataLength=data.length;
		var minTime=data[0].time;

		data.forEach(function(eachdata,index){
			var vass=["rate_norepinephrine","rate_epinephrine","rate_dopamine","rate_dobutamine"];
			vass.forEach(function(eachvasso){
				data[index][eachvasso]=-1;
			});
		});

		return EicuModel.getwt(patientId,function(err,wts){
			if(err){
				return callback(err);
			}

			var wt= -1;
			if(wts.length>0 && wts[0].admissionWeight){
				wt=wts[0].admissionWeight;
			}

			return EicuModel.getVassoInfusionData(patientId,function(err,vassoinfusionData){
				if(err){
					return callback(err);
				}

				vassoinfusionData.forEach(function(eachVassoData){ 
					
					var time=eachVassoData.infusionoffset;
					var label=eachVassoData.drugname;
					var val= Number(eachVassoData.drugrate);
					var ind= Math.round((time-minTime)/60);

					if(ind>=0 && ind < dataLength && val != NaN && val>0){
						if(label=="Norepinephrine (ml/hr)" || label =="Norepinephrine ()" || label == "norepinephrine Volume (ml) (ml/hr)" || label== "Norepinephrine"){
							// convert ml/hr to µg/kg/min
							if(wt!=-1){

								data[ind]["rate_norepinephrine"]=(val*4/15)/wt;
							}else{
								data[ind]["rate_norepinephrine"]=(val*4/15)/75;

							}
							
						}
						if(label=="Levophed (mcg/min)"|| label=="levophed (mcg/min)" || label=="levophed  (mcg/min)" || label=="Norepinephrine (mcg/min)" || label=="Norepinephrine STD 4 mg Dextrose 5% 250 ml (mcg/min)" || label=="Norepinephrine MAX 32 mg Dextrose 5% 250 ml (mcg/min)" || label == "Norepinephrine MAX 32 mg Dextrose 5% 500 ml (mcg/min)" || label == "Norepinephrine STD 8 mg Dextrose 5% 500 ml (mcg/min)" || label == "Norepinephrine STD 8 mg Dextrose 5% 250 ml (mcg/min)" || label == "Norepinephrine STD 4 mg Dextrose 5% 500 ml (mcg/min)" || label == "Norepinephrine STD 32 mg Dextrose 5% 500 ml (mcg/min)" || label == "Norepinephrine STD 32 mg Dextrose 5% 282 ml (mcg/min)"){
							// convert µg/min to µg/kg/min
							if(wt!=-1){
								data[ind]["rate_norepinephrine"]=val/wt;	
							}else{
								data[ind]["rate_norepinephrine"]=val/75;	

							}
							
						}
						if(label=="Norepinephrine (mcg/kg/min)"){
							
							data[ind]["rate_norepinephrine"]=val;
						}
						if(label=="Norepinephrine (mcg/kg/hr)"){
							// convert mcg/kg/hr to µg/kg/min
							data[ind]["rate_norepinephrine"]=val/60;
						}

						
						
						if(label=="Epinephrine (ml/hr)" || label=="Epinephrine ()"){
							// convert ml/hr to µg/kg/min
							if(wt!=-1){
								data[ind]["rate_epinephrine"]=(val*2/15)/wt;
							}else{
								data[ind]["rate_epinephrine"]=(val*2/15)/75;

							}
							
						}

						if(label=="Epinephrine (mcg/min)" || label=="EPINEPHrine(Adrenalin)STD 4 mg Sodium Chloride 0.9% 250 ml (mcg/min)" || label=="EPINEPHrine(Adrenalin)MAX 30 mg Sodium Chloride 0.9% 250 ml (mcg/min)" || label=="EPINEPHrine(Adrenalin)STD 7 mg Sodium Chloride 0.9% 250 ml (mcg/min)"  || label=="EPINEPHrine(Adrenalin)STD 4 mg Sodium Chloride 0.9% 500 ml (mcg/min)" || label=="Epinepherine (mcg/min)"){
							// convert (mcg/min) to µg/kg/min
							if(wt!=-1){
								data[ind]["rate_epinephrine"]=val/wt;	
							}else{
								data[ind]["rate_epinephrine"]=val/75;	

							}
							
						}

						if(label=="Epinephrine (mcg/kg/min)"){
							data[ind]["rate_epinephrine"]=val;
						}

						if(label=="Epinephrine (mg/kg/min)"){
							data[ind]["rate_epinephrine"]=val;
						}

						if(label=="Dobutamine (ml/hr)"|| label=="Dobutamine ()"){
							// convert (ml/hr)
							if(wt!=-1){
								data[ind]["rate_dobutamine"]=(val*1000)/(15*wt);	
							}else{
								data[ind]["rate_dobutamine"]=(val*1000)/(15*75);	

							}
							
						}

						if(label=="Dobutamine (ml/hr)"|| label=="Dobutamine ()"){
							// convert (ml/hr)
							if(wt!=-1){
								data[ind]["rate_dobutamine"]=(val*1000)/(15*wt);	
							}else{
								data[ind]["rate_dobutamine"]=(val*1000)/(15*75);	

							}
						}


						if(label=="Dobutamine (ml/hr)"|| label=="Dobutamine ()"){
							// convert (ml/hr)
							if(wt!=-1){
								data[ind]["rate_dobutamine"]=(val*1000)/(15*wt);	
							}else{
								data[ind]["rate_dobutamine"]=(val*1000)/(15*75);	

							}
						}

						if(label=="Dobutamine (mcg/kg/min)" || label=="DOBUTamine STD 500 mg Dextrose 5% 250 ml  Premix (mcg/kg/min)"|| label=="DOBUTamine MAX 1000 mg Dextrose 5% 250 ml  Premix (mcg/kg/min)" ){
							data[ind]["rate_dobutamine"]=val;	
						}

						

						if(label=="Dopamine (ml/hr)" || label=="Dopamine ()" || label == "Dopamine"){
							if(wt!=-1){
								data[ind]["rate_dopamine"]=(val*800)/(15*wt);	
							}else{
								data[ind]["rate_dopamine"]=(val*800)/(15*75);	

							}
							
						}

						if(label=="Dopamine (mcg/kg/min)" || label=="DOPamine STD 400 mg Dextrose 5% 250 ml  Premix (mcg/kg/min)" || label=="DOPamine MAX 800 mg Dextrose 5% 250 ml  Premix (mcg/kg/min)"  || label=="dopamine (mcg/kg/min)" || label=="DOPamine STD 15 mg Dextrose 5% 250 ml  Premix (mcg/kg/min)" || label=="DOPamine STD 400 mg Dextrose 5% 500 ml  Premix (mcg/kg/min)"){
							data[ind]["rate_dopamine"]=val;
						}


						


						

					}
				});

				return callback(null,data);

			})

		});

	},
	getMergeAdditionalData: function(patientId, settings, data, callback){
		var vassopressor=1;
		var sofa=1;
		var microlabsFeatures=settings.microlabsFeatures;
		if(settings && settings.vassopressor){
			vassopressor=1;
		}
		if(settings && settings.sofa){
			sofa=1;
		}
		var start = Date.now();
		return module.exports.getVasData(patientId,vassopressor,data,function(err, vassodata){
			if(err){
				return callback(err);
			}
			console.log("extract Vasso Data");
			console.log(start-Date.now());
			return module.exports.getVentGcsData(patientId,vassodata,microlabsFeatures, function(err,ventData){

				return module.exports.getsofaData(sofa, ventData, function(err,vassosofadata){
					if(err){
						return callback(err);

					}


					return callback(null, vassosofadata);
				});

				
			})

		})
	},

	getMergeLabData: function(patientId,dataVitalSign,labItems, labRepeat, callback){
		
		var dataVitalSignLength=dataVitalSign.length;
		//get all LabData with patient ID with items in the labItems
		return EicuModel.getLabData(patientId,labItems,function(err,labReading){
			if(err){
				return callback(err);
			}

			
			var minTime=dataVitalSign[0].time;
			var tempLabEvents=[];

			dataVitalSign.forEach(function(eachVitalSign,index){
				var temp={};
				temp.time=eachVitalSign.time
				labItems.forEach(function(item){
					temp[item]={timeDif:130, val:-1};
					dataVitalSign[index][item]=-1;
				});
				tempLabEvents.push(temp);
			});



			labReading.forEach(function(eachLabReading){

				

				var time=eachLabReading.labresultoffset;
				var label=eachLabReading.labname;
				var val= Number(eachLabReading.labresult);

				
				var ind= Math.round((time-minTime)/60);



				if(ind>=0 && ind < dataVitalSignLength && val != NaN && val>0){

				
				var timeDif=Math.abs(tempLabEvents[ind].time-time);



				if(timeDif<tempLabEvents[ind][label].timeDif){
					tempLabEvents[ind][label].timeDif=timeDif;
					tempLabEvents[ind][label].val=val;
					dataVitalSign[ind][label]=val;
					var maxInd=dataVitalSignLength;
					for(var i =1;i<labRepeat;i++){
						var indRepeat=i+ind;
						if(indRepeat < maxInd){
							dataVitalSign[indRepeat][label]=val;
						}
					}
				}
				}
			});
			

			return callback(err, dataVitalSign);
		});
	}, 	
	getVitalsignData: function(patientId,callback){
		
		//get all Data with patient ID
		return EicuModel.getVitalsignData(patientId,function(err, vitalsignReading){
			if(err){
				return callback(err);
			}

			
			if(vitalsignReading.length<=1){
				return callback(null, []);
			}
			//Decomposing the Data Set
			var firstnode=vitalsignReading[0];
			var lastnode= vitalsignReading[vitalsignReading.length-1];
			var minTime = firstnode.observationoffset;
			var maxTime = lastnode.observationoffset;
			var totalMinutes=maxTime-minTime;
			var totalHours=totalMinutes/60;
			var patientunitstayid=firstnode.patientunitstayid;

			vitalLabels=['temperature','sao2','heartrate','respiration','cvp','etco2','systemicsystolic','systemicdiastolic','systemicmean','pasystolic','padiastolic','pamean','st1','st2','st3','icp'];
			
			vitalsignTempDecomposed=[];

			for(i=0;i<totalHours;i++){
				vitalSignAtTimei={};
				vitalSignAtTimei['patientunitstayid']=patientunitstayid;
				vitalSignAtTimei['time']=i*60+minTime;

				

				vitalLabels.forEach(function(vital){
					var temp = {};
					temp.val=-1;
					temp.timeDif=120;
					vitalSignAtTimei[vital]=temp;
				});
				vitalsignTempDecomposed.push(vitalSignAtTimei);
			}

			var index=0;
			var decomposedIndex=0;

			var vitalsignReadingLength=vitalsignReading.length;

			var vitalsignTempDecomposedLength=vitalsignTempDecomposed.length

			while(index<vitalsignReadingLength && decomposedIndex<vitalsignTempDecomposedLength){
				
				var currentVitalSign=vitalsignReading[index];
				var currentVitalSignDecomposed=vitalsignTempDecomposed[decomposedIndex];

				var vacurrentVitalSignTime=vitalsignReading[index].observationoffset;
				var currentVitalSignTimeDecomposed=vitalsignTempDecomposed[decomposedIndex].time;

				var diff= Math.abs(currentVitalSignTimeDecomposed - vacurrentVitalSignTime);
				

				if(diff>60){
					decomposedIndex=decomposedIndex+1;
				}else{
					vitalLabels.forEach(function(label){
						if(currentVitalSign[label]!=null){
							if(currentVitalSignDecomposed[label].timeDif>diff){
								currentVitalSignDecomposed[label].val=currentVitalSign[label];
								currentVitalSignDecomposed[label].timeDif=diff;
							}
						}
					});
					index=index+1;
				}
			}

			decomposedVitalSignReading=[];
			vitalsignTempDecomposed.forEach(function(currentVitalSign){
				var temp={};
				temp.patientunitstayid=currentVitalSign.patientunitstayid;
				temp.time=currentVitalSign.time;
				vitalLabels.forEach(function(label){
					temp[label]=currentVitalSign[label].val;
				});
				temp['map']=-1;
				if(temp['systemicsystolic']!=-1 && temp['systemicdiastolic']!=-1){
					

					temp['map']=(Number(temp['systemicsystolic'])+(2*Number(temp['systemicdiastolic']))) /3;
				

				}
				decomposedVitalSignReading.push(temp);

			});





			return callback(null, decomposedVitalSignReading);
		});
	},

	
	generateReport: function(inputData,callback){
		try{

			var headermap={'patientunitstayid':'CaseId','observationtime24':'24hTimestamp','temperature':'Temp','heartrate':'Pulse','respiration':'Resp','glasgow_coma_score':'Score_(Glasgow_Coma_Scale)','bedside glucose':'Blood_Glucose','WBC x 1000':'WBC_(WHITE_BLOOD_COUNT)','systemicsystolic':'Systolic_BP','map':'MAP','creatinine':'CREATININE_SERUM','PT - INR':'INR','PTT':'PTT','platelets x 1000':'PLATELET_COUNT','total bilirubin':'BILIRUBIN__TOTAL','lactate':'LACTATE__WHOLE_BLOOD','heartrate_hist_1':'HR_Hist{1}','heartrate_hist_2':'HR_Hist{2}','heartrate_hist_3':'HR_Hist{3}','systemicsystolic_hist_1':'SBP_Hist{1}','systemicsystolic_hist_2':'SBP_Hist{2}','systemicsystolic_hist_3':'SBP_Hist{3}','map_hist_1':'MAP_Hist{1}','map_hist_2':'MAP_Hist{2}','map_hist_3':'MAP_Hist{3}','heartrate_fut_1':'HR_Predict{1}','heartrate_fut_2':'HR_Predict{2}','heartrate_fut_3':'HR_Predict{3}','systemicsystolic_fut_1':'SBP_Predict{1}','systemicsystolic_fut_2':'SBP_Predict{2}','systemicsystolic_fut_3':'SBP_Predict{3}','map_fut_1':'MAP_Predict{1}','map_fut_2':'MAP_Predict{2}','map_fut_3':'MAP_Predict{3}'};

			var icd9Codes=inputData.icd9codes;

			var microlabsFeatures=["Sputum, Expectorated","Sputum, Tracheal Specimen", "Bronchial Lavage","Urine, Catheter Specimen", "Urine, Voided Specimen"];

			var excludeIcd9Codes=[];


			//Exclude all icd9codes for septic shock
			//excludeIcd9Codes=["785.52, R65.21","785.52, 785.52, R65.21","038.9, 785.52, R65.21", "995.90"];

			//Exclude all icd9codes for sepsis
			//excludeIcd9Codes=["995.91, R65","785.59, 038.9, 995.92, R65.21","995.92, R65.2","995.92, R65.20","785.59, 038.9, 995.92","995.90"];


			// excludeIcd9Codes=["995.90"];


			var  inputFeatures=inputData.inputfeatures;

			var outputFeatures=inputData.targetfeatures;

			var labRepeat=0;

			var labItems= [];

			var vitalReadings=[];


			var minDiagnosisTime=4;

			var minReading=8;

			var vassopressors=1;

			var settings = {
				vassopressors:0,
				sofa:0,
				microlabsFeatures:microlabsFeatures
				};


			var trainingDatafileName="trainingData_"+Math.floor(Date.now() / 1000)+".csv";
			var validationDatafileName="validationData_"+Math.floor(Date.now() / 1000)+".csv";

			var patientTrainingWithDiagnosis = 0;
			var patientTrainingWithoutDiagnosis = 0;
			var validationTrainingWithDiagnosis = 0;
			var validationTrainingWithoutDiagnosis = 0;

			


			Object.keys(inputFeatures).forEach(function(label){
				if(inputFeatures[label].dbsource==="lab"){
					labItems.push(label);
				}
				if(inputFeatures[label].dbsource==="vitalPeriodic"){
					vitalReadings.push(label);
				}
			});

			Object.keys(outputFeatures).forEach(function(label){
				if(outputFeatures[label].dbsource==="lab"){
					labItems.push(label);
				}
				if(outputFeatures[label].dbsource==="vitalPeriodic"){
					vitalReadings.push(label);
				}
			});



			


			//Get all the patients with the icd9codes.
			return module.exports.getPatients(icd9Codes, excludeIcd9Codes,function(err, patientIds, patientIdDic){
				
			

				var wflagt=0;

				var wflagv=0;

				var tempLen=patientIds.length;
				var patients=[];

				console.log(patientIds);
				patientIds.forEach(function(patientId,index){
					 var currentInfo ={
						patientId:patientId,
						length:tempLen,
						current:index
					}
					patients.push(currentInfo);
				});


				var initialStart = Date.now();




				async.eachSeries(patients, function(currentPatient, callback) {
					var patientId= currentPatient.patientId;
					console.log("Total time taken:");
					console.log(Date.now()-initialStart);
					initialStart=Date.now();
					

    			// Perform operation on file here.
    				//console.log('Processing PatientID ' + patientId);
    				console.log(currentPatient.length);
    				console.log(currentPatient.current);
    				console.log('Progeress:'+ ((currentPatient.current/currentPatient.length)*100));

    				console.log("Nummber of Patients in the training data set with Diagnosis: ");
    				console.log(patientTrainingWithDiagnosis);

    				console.log("Nummber of Patients in the training data set without Diagnosis: ");
    				console.log(patientTrainingWithoutDiagnosis);

    				console.log("Nummber of Patients in the validation data set with Diagnosis: ");
    				console.log(validationTrainingWithDiagnosis);


    				console.log("Nummber of Patients in the validation data set without Diagnosis: ");
    				console.log(validationTrainingWithoutDiagnosis);

    				var start = Date.now();

    				//Get Vital Sign Data 
    				return module.exports.getVitalsignData(patientId, function(err, dataVitalSign){
    					console.log("Time Taken to extract the vital sign Data:")
    					var vital = Date.now();
    					console.log(start-vital);
    					if(err){
    						return callback(err);
    					}

    					if(dataVitalSign.length<=0){
    						return callback();
    					}

    					//Get Data from the lab table
    					return module.exports.getMergeLabData(patientId, dataVitalSign, labItems, labRepeat,function(err,dataVitalSignLab){
    					console.log("Time Taken to extract the  lab Data:")
    					var lab = Date.now();
    					console.log(vital-lab);

    						if(err){
    							return callback(err);
    						}

    						// //Get vassopressors data
    						return module.exports.getMergeAdditionalData(patientId, settings, dataVitalSignLab, function(err,dataVitalSignLabAddtion){
    						// get data from the diagnosis Table;
    						console.log("Time Taken to extract the Additional Data:")
    						var additional= Date.now();
    						console.log(additional-lab);
	    						return module.exports.getMergeDiagnosisPatientTable(patientId,dataVitalSignLabAddtion,icd9Codes,function(err,dataVitalSignLabDiagnosis){
	    							console.log("Time Taken to extract the diagnosis Data:")
    								var diagnosisd= Date.now();
    								console.log(diagnosisd-additional);
	    							if(err){
	    									return callback(err);
	    								}

	    							// Add history and Predictions to the data;

	    							return module.exports.getDataWithHistoryPrediction(dataVitalSignLabDiagnosis, inputFeatures, outputFeatures, function(err, dataVitalSignLabDiagnosisPredictHist){
	    								
	    								console.log("Time Taken to extract the history prediction Data:")
	    								var histpre= Date.now();
    									console.log(histpre-diagnosisd);

	    								if(err){
	    									return callback(err);
	    								}


	    								//Get proper Headers as per the input

	    								return module.exports.getDataHeaders(inputFeatures,outputFeatures,icd9Codes,microlabsFeatures,function(err, headers, inputHeaders, targetHeaders){
	    								console.log("Time Taken to extract the headers Data:")
	    								var headersd= Date.now();
    									console.log(headersd-histpre);

	    									if(err){
	    										return callback(err);
	    									}

	    									//Remove Rows with any null outputs and all null input
	    									return module.exports.trimNullData(inputHeaders,targetHeaders, dataVitalSignLabDiagnosisPredictHist, function(err, trimmedDataVitalSignLabDiagnosisPredictHist){
	    										
	    										console.log("Time Taken to trim null data:")
	    										var nulldata= Date.now();
    											console.log(nulldata-headersd);

	    										if(trimmedDataVitalSignLabDiagnosisPredictHist.length<=4){
	    											return callback();
	    										}

	    										if(trimmedDataVitalSignLabDiagnosisPredictHist.length>0){
	    											var diagnosis=trimmedDataVitalSignLabDiagnosisPredictHist[0].diagnosis
	    											var initialDiagnosis=trimmedDataVitalSignLabDiagnosisPredictHist[0].firstdiagnosis;
	    											console.log(initialDiagnosis);
	    											console.log("Shit happens");
	    											var startTime=trimmedDataVitalSignLabDiagnosisPredictHist[0].time;
	    											if(diagnosis==1){
	    												if(initialDiagnosis<minDiagnosisTime*60+startTime){
	    													//return callback();
	    												}
	    											}
	    										}

	    										var outputData=trimmedDataVitalSignLabDiagnosisPredictHist;

	    										// trimmedDataVitalSignLabDiagnosisPredictHist.forEach(function(eachRow){
	    										// 	temp={};
	    										// 	headers.forEach(function(header){
	    										// 		if(headermap[header]){
	    										// 			temp[headermap[header]]=eachRow[header];
	    										// 		}else{
	    										// 			temp[header]=eachRow[header];
	    										// 		}
	    										// 	});
	    										// 	outputData.push(eachRow);
	    										// });



	    										var newHeaders=headers;
	    										// headers.forEach(function(header){
	    										// 	if(headermap[header]){
	    										// 		newHeaders.push(headermap[header]);
	    										// 	}else{
	    										// 		newHeaders.push(header);
	    										// 	}
	    										// });







												var fileName='';
												if(patientIdDic[patientId].file=='train'){
													fileName=trainingDatafileName;
													if(trimmedDataVitalSignLabDiagnosisPredictHist[0].diagnosis==1){
	    												patientTrainingWithDiagnosis = patientTrainingWithDiagnosis+1;
													}else{
														patientTrainingWithoutDiagnosis = patientTrainingWithoutDiagnosis+1;
													}
												}else{
													fileName=validationDatafileName;
													if(trimmedDataVitalSignLabDiagnosisPredictHist[0].diagnosis==1){
	    												validationTrainingWithDiagnosis = validationTrainingWithDiagnosis+1
													}else{
														validationTrainingWithoutDiagnosis = validationTrainingWithoutDiagnosis+1;
													}

												}
												
												if(outputData.length==0){
													return callback();
												}

												


												// newHeaders=["patientunitstayid","diagnosis","diagnosisstring","icd9code","firstdiagnosis","firstSepticShockDiagnosis","firstSepsisDiagnosis","age","lengthofStay_icu","lengthofStay_hospital","died","dischargeTime","sex","time","temperature","sao2","heartrate","respiration","systemicsystolic","systemicdiastolic","map","isVent","gcs","WBC x 1000","paO2","FiO2","total bilirubin","creatinine","platelets x 1000","bedside glucose","lactate","PT - INR","PTT","pao2Fio2ratio","rate_norepinephrine","rate_epinephrine","rate_dopamine","rate_dobutamine","cardiovascular","kidneys","coagulation","liver","respiratory","nervous","sofa","qsofa","delSofa","sepsis3","sepsis3SepticShock","map_hist_1","map_hist_2","map_hist_3","heartrate_hist_1","heartrate_hist_2","heartrate_hist_3","systemicsystolic_hist_1","systemicsystolic_hist_2","systemicsystolic_hist_3","heartrate_fut_1","heartrate_fut_2","heartrate_fut_3","map_fut_1","map_fut_2","map_fut_3","systemicsystolic_fut_1","systemicsystolic_fut_2","systemicsystolic_fut_3"];
												 // newHeaders=Object.keys(outputData[0]);
												
												// console.log(newHeaders);

												

					    						if(wflagt==0 && fileName==trainingDatafileName){
					    							wflagt=1;
						    						var csv = json2csv({ data: outputData, fields: newHeaders});

						    						
													return fs.writeFile('./dataset/'+fileName, csv, function(err) {
						  								if (err) return callback(err);
						  									//console.log('file saved');
						  									console.log("Time Taken to save Data  data:")
				    										var save= Date.now();
			    											console.log(save-nulldata);
						    								return callback();
													});
						    							
					    						}

					    						if(wflagv==0 && fileName==validationDatafileName){
					    							wflagv=1;
					    						var csv = json2csv({ data: outputData, fields: newHeaders});
					 							
												return fs.writeFile('./dataset/'+fileName, csv, function(err) {
					  								if (err) {
					  								return callback(err);	
					  								}
					  							//console.log('file saved');
					  							console.log("Time Taken to save Data  data:")
	    										var save= Date.now();
    											console.log(save-nulldata);

					    							return callback();
												});
					    							
					    						}



					    						var csv = json2csv({ data: outputData, fields: newHeaders, hasCSVColumnTitle:false});
					 							csv="\n"+csv;
												return fs.appendFile('./dataset/'+fileName, csv, function(err) {
					  								if (err) return callback(err);
					  							//console.log('file saved');
					  							console.log("Time Taken to save Data  data:")
	    										var save= Date.now();
    											console.log(save-nulldata);
					    						return callback();
		    									
		    									});
	    										
	    									});
	    								});
									});
	    						});	

    						});

    						

    					})
    					
    				});
    				
				}, function(err) {
    				// if any of the file processing produced an error, err would equal that error
    				if( err ) {
      					// One of the iterations produced an error.
      					// All processing will now stop.
      					console.log(err);
      					console.log('A file failed to process');
    				} else {
      					console.log('All files have been processed successfully');
    				}
    				var output={};

    				output.data_train_url= process.env.PWD + '/dataset/'+trainingDatafileName;
    				output.data_validation_url= process.env.PWD + '/dataset/'+validationDatafileName;

    			
		
    				console.log("Nummber of Patients in the training data set with Diagnosis: ");
    				console.log(patientTrainingWithDiagnosis);

    				console.log("Nummber of Patients in the training data set without Diagnosis: ");
    				console.log(patientTrainingWithoutDiagnosis);

    				console.log("Nummber of Patients in the validation data set with Diagnosis: ");
    				console.log(validationTrainingWithDiagnosis);


    				console.log("Nummber of Patients in the validation data set without Diagnosis: ");
    				console.log(validationTrainingWithoutDiagnosis);




    				return callback(null,output);
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

