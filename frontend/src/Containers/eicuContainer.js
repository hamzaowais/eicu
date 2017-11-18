/*jslint node: true, esversion:6 */
"use strict";
import React, { Component } from 'react'; 
import { Col, Row, Grid, Button, Glyphicon, Panel,FormGroup,ControlLabel,FormControl,Checkbox,Form,ListGroupItem, DropdownButton } from 'react-bootstrap';
import _ from 'lodash/core';
import uuidV4 from 'uuid/v4';
import './ReportingContainer.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import json2csv from 'json2csv';
import fs from 'fs';
import fileDownload from 'react-file-download';
import request from 'request';
import axios from 'axios';
import queryString from 'query-string';
import backendlink from '../../config/links.js';
//import Hyperlink from 'react-native-hyperlink'

class ReportingContainer extends Component {
	constructor(props) {
		super(props);
		var alert={ 
			flag:0,
			message:"No alert- This is asystem Error Please contact admin"
		}

		
		this.state = {
			loading:0,
			alert:alert,
			step:0,
			icd9codes:[],
			inputfeatures:{},
			targetfeatures:{},
			thingsTodo:[],
			tableItemsTarget: {
				
				columns: [
					{
		        Header: 'dbsource',
		        accessor: 'dbsource'
		      },
		      {
		        Header: 'labell',
		        accessor: 'labell'
		      },
		      {
		        Header: 'countl',
		        accessor: 'countl'
		      },
		      {
		        Header: 'add',
		        accessor: 'add',
		     	Cell: row => (
          			<div>
           			<Button onClick={this.handleButtonClickSelectItemTarget.bind(this, row)}>  UnSelect/Select </Button>
          			</div>
        		)
		      },
		      {
		        Header: 'future',
		        accessor: 'future',
		        Cell: row => (
          			<div>
          			{this.displayFutureSeletingButton(row)}

          			</div>
        		)
		      },

		      {
		      	Header: 'select',
		        accessor: 'select',	
		      	Cell:row=>(
		      		<div>
		      			<div
              				style={{
                			width: '100%',
                			height: '100%',
               				backgroundColor: row.value === 'not selected' ? '#ff2e00' : row.value === 'selected' ? '#85cc00': '#85cc00',
                  			
                			borderRadius: '2px',
                			transition: 'all .2s ease-out'
              				}}
            			>{row.value}
            			</div>
		      		</div>
		      		)
		      }
	      ],
				rows: [
					{select:'select'}
				]
			},
			tableItems: {
				
				columns: [
					{
		        Header: 'dbsource',
		        accessor: 'dbsource'
		      },
		      {
		        Header: 'labell',
		        accessor: 'labell'
		      },
		      {
		        Header: 'countl',
		        accessor: 'countl'
		      },
		      {
		        Header: 'add',
		        accessor: 'add',
		     	Cell: row => (
          			<div>
           			<Button onClick={this.handleButtonClickSelectItem.bind(this, row)}>  UnSelect/Select </Button>
          			</div>
        		)
		      },
		      {
		        Header: 'history',
		        accessor: 'history',
		        Cell: row => (
          			<div>
          			{this.displayHistorySeletingButton(row)}

          			</div>
        		)
		      },

		      {
		      	Header: 'select',
		        accessor: 'select',	
		      	Cell:row=>(
		      		<div>
		      			<div
              				style={{
                			width: '100%',
                			height: '100%',
               				backgroundColor: row.value === 'not selected' ? '#ff2e00' : row.value === 'selected' ? '#85cc00': '#85cc00',
                  			
                			borderRadius: '2px',
                			transition: 'all .2s ease-out'
              				}}
            			>{row.value}
            			</div>
		      		</div>
		      		)
		      }
	      ],
				rows: [
					{select:'select'}
				]
			},
			tableIcd9: {
				
				columns: [
					{
		        Header: 'icd9code',
		        accessor: 'icd9code'
		      },
		      {
		        Header: 'count',
		        accessor: 'count'
		      },
		      {
		        Header: 'add',
		        accessor: 'add',
		     	Cell: row => (
          			<div>
           			<Button onClick={this.handleButtonClick.bind(this, row)}>  UnSelect/Select </Button>
          			</div>
        		)
		      },
		      
		      {
		      	Header: 'select',
		        accessor: 'select',	
		      	Cell:row=>(
		      		<div>
		      			<div
              				style={{
                			width: '100%',
                			height: '100%',
               				backgroundColor: row.value === 'not selected' ? '#ff2e00' : row.value === 'selected' ? '#85cc00': '#85cc00',
                  			
                			borderRadius: '2px',
                			transition: 'all .2s ease-out'
              				}}
            			>{row.value}
            			</div>
		      		</div>
		      		)
		      }
	      ],
				rows: [
					{select:'select'}
				]
			}
		};
	}
	sortAsc(data, key) {
		var result = _.orderBy(data, [key], ['asc']);
		return result;
	}
	sortDesc(data, key) {
		var result = _.orderBy(data, [key], ['desc']);	
	}


	displayFutureSeletingButton(row){
		var original = row.original	;

		if(original.select=="not selected"){
		    
		    return(
		    	<div>
		    	<Button disabled>  + </Button>
		    	<Button disabled>  - </Button>
		    	</div>
		    	)
		}	else{
			return(
				<div>
		    	<Button onClick={this.handleButtonClickFutureChange.bind(this, row, 1)}>  + </Button>
		    	<Button onClick={this.handleButtonClickFutureChange.bind(this, row, -1)}>  - </Button>
		    	{row.value}
		    	</div>
		    	)	
		}	
	}
	displayHistorySeletingButton(row){
	
		var original = row.original	;

		if(original.select=="not selected"){
		    
		    return(
		    	<div>
		    	<Button disabled>  + </Button>
		    	<Button disabled>  - </Button>
		    	</div>
		    	)
		}	else{
			return(
				<div>
		    	<Button onClick={this.handleButtonClickHisoryChange.bind(this, row, 1)}>  + </Button>
		    	<Button onClick={this.handleButtonClickHisoryChange.bind(this, row, -1)}>  - </Button>
		    	{row.value}
		    	</div>
		    	)

			
		}

		
	}
	

	handleButtonClickFutureChange(row,delChange){
		var tableItemsTarget=this.state.tableItemsTarget;
		var rows=tableItemsTarget.rows;
		var targetfeatures=this.state.targetfeatures;

		var original=row.original;
		var future= row.original.future + delChange;
		var index=row.original.index;

		if(future>=0){
			
			targetfeatures[original.labell].future=future;
			rows[index]['future']=future;
		}	
		
		tableItemsTarget.rows=rows.slice(0);
		console.log(targetfeatures);
		const tableItemsTarget1=tableItemsTarget;

		const targetfeatures1=this.clone(targetfeatures);
		
		this.setState({
			tableItemsTarget:tableItemsTarget1,
			targetfeatures:targetfeatures1
		});
		

	}

	handleButtonClickHisoryChange(row,delChange){
		var tableItems=this.state.tableItems;
		var rows=tableItems.rows;
		var inputfeatures=this.state.inputfeatures;

		var original=row.original;
		var history= row.original.history + delChange;
		var index=row.original.index;

		if(history>=0){
			
			inputfeatures[original.labell].history=history;
			rows[index]['history']=history;
		}	
		
		tableItems.rows=rows.slice(0);
		console.log(inputfeatures);
		const tableItems1=tableItems;

		const inputfeatures1=this.clone(inputfeatures);
		
		this.setState({
			tableItems:tableItems1,
			inputfeatures:inputfeatures1
		});
		

	}

	clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

	handleButtonClickSelectItemTarget(row){
		console.log(row);
		var tableItemsTarget=this.state.tableItemsTarget;
		var rows=tableItemsTarget.rows;
		var targetfeatures=this.state.targetfeatures;
		

		var original= row.original;
		var select = original.select;
		var index= original.index;

		if(select=='not selected'){
			
			var temp={};
			temp['future']=0;
			temp['dbsource']=original.dbsource;
			targetfeatures[row.value]=temp;
			rows[index].select='item selected';
		}else{
			
			rows[index].select='not selected';
			rows[index].future=0;
			if(typeof targetfeatures[row.value] != "undefined"){
				delete targetfeatures[row.value];

			}

		}

		tableItemsTarget.rows=rows.slice(0);

		const tableItemsTarget1=tableItemsTarget;

		const targetfeatures1=this.clone(targetfeatures);
		
		this.setState({
			tableItemsTarget:tableItemsTarget1,
			targetfeatures:targetfeatures1
		});
	
	

	}

	handleButtonClickSelectItem(row){
		var tableItems=this.state.tableItems;
		var rows=tableItems.rows;
		var inputfeatures=this.state.inputfeatures;
		

		var original= row.original;
		var select = original.select;
		var index= original.index;

		if(select=='not selected'){
			
			var temp={};
			temp['history']=0;
			temp['dbsource']=original.dbsource;
			inputfeatures[row.value]=temp;
			rows[index].select='item selected';
		}else{
			rows[index].select='not selected';
			rows[index].history=0;
			if(typeof inputfeatures[row.value] != "undefined"){
				delete inputfeatures[row.value];

			}

		}

		tableItems.rows=rows.slice(0);

		const tableItems1=tableItems;

		const inputfeatures1=this.clone(inputfeatures);
		
		this.setState({
			tableItems:tableItems1,
			inputfeatures:inputfeatures1
		});

	}

	handleButtonClick(row){
		
		var tableIcd9=this.state.tableIcd9;
		var rows=tableIcd9.rows;
		var icd9codes=this.state.icd9codes;
		var original= row.original;
		var select = original.select;
		var index= original.index;
		
		if(select=='not selected'){
			icd9codes.push(row.value);
			rows[index].select='icd9 selected';
		}else{
			rows[index].select='not selected';
			var indexIcd9 = icd9codes.indexOf(row.value);
			if(indexIcd9>-1){
				icd9codes.splice(indexIcd9,1);
			}
		}

		

		//rows.push({icd9codes:0,count:0,add:0,select:'not selected'});
		tableIcd9.rows=rows.slice(0);
		
		

		const tableIcd91=tableIcd9;

		this.setState({
			tableIcd9:tableIcd91,
			icd9codes:icd9codes
		});



	}

	soFarDataCollected(){
		var icd9codes= this.state.icd9codes;
		var inputfeatures=this.state.inputfeatures;
		var targetfeatures=this.state.targetfeatures;
		

		var thingsTodo=[];

		var flag=0;
		var containsVitalPeriodic=0;

		//Check if there are vitalPeriodic in the input Feature Space.

		Object.keys(inputfeatures).forEach(function(inputfeature){
			if(inputfeatures[inputfeature].dbsource=="vitalPeriodic"){
				containsVitalPeriodic=1;
			}

		})

		if(containsVitalPeriodic==0){
			flag=1;
			thingsTodo.push("Please select atleast one feature From ViatalPeriodic DBSource.");
		}
		if(Object.keys(inputfeatures).length==0){
			flag=1;
			thingsTodo.push("Please Select inputfeatures.");
		}
		if(Object.keys(targetfeatures).length==0){
			flag=1;
			thingsTodo.push("Please Select targetfeatures.");
		}
		if(icd9codes.length==0){
			flag=1;
			thingsTodo.push("Please Select icd9codes.");
		}



		var inputfeaturesStr='';
		var todoHtml=[];

		thingsTodo.forEach(function(task,index){

			todoHtml.push(
				
				<div>
				{index+1}: {task}
				</div>
				);
			//todoHtml.push(<br/>);

	
		});
	

		Object.keys(inputfeatures).forEach(function(inputfeature){
			inputfeaturesStr= inputfeaturesStr+' || '+inputfeature;
			for(var i=1;i<=inputfeatures[inputfeature].history;i++){
				inputfeaturesStr= inputfeaturesStr+' || '+inputfeature+'_hist_'+i;
			}

		});

		var targetfeaturesStr='';
		Object.keys(targetfeatures).forEach(function(targetfeature){
			targetfeaturesStr= targetfeaturesStr+' || '+targetfeature;
			for(var i=1;i<=targetfeatures[targetfeature].future;i++){
				targetfeaturesStr= targetfeaturesStr+' || '+targetfeature+'_fut_'+i;
			}

		});



		return(
			<div>
			<div>
			<b>Task that need to be done prior to Data Generation</b>: {todoHtml}
			</div>
			<div>
			<b>Selected icd9codes</b>: {icd9codes.join('	||	')}
			</div>

			<div>
			<b>Selected Input Features</b>: {inputfeaturesStr}
			</div>

			<div>
			<b>Selected Target Features</b>: {targetfeaturesStr}
			</div>


			</div>
			);

	}
	componentDidMount() {

		axios.get(backendlink.backendlink+'/getInitialData')
		.then(function (response) {
    		
    		var tableIcd9=this.state.tableIcd9;
    		var tableItems=this.state.tableItems;
    		var tableItemsTarget=this.state.tableItemsTarget;
			var data=response.data;	
			var icds=data.icd9Code;
			var items=data.items;

			var itemsTarget= JSON.parse(JSON.stringify(data.items))


			icds.forEach(function(row,index){
				
				row['add']=row['icd9code'];
				row['select']='not selected';
				row['index']=index;	
			});

			tableIcd9.rows=icds;

			items.forEach(function(row,index){
				row['add']=row['labell'];
				row['select']='not selected';
				row['index']=index;
				row['history']=0;
			});
			tableItems.rows=items;



			itemsTarget.forEach(function(row,index){
				row['add']=row['labell'];
				row['select']='not selected';
				row['index']=index;
				row['future']=0;
			});
			tableItemsTarget.rows=itemsTarget;

			
			this.setState({
				tableIcd9:tableIcd9,
				tableItems:tableItems,
				tableItemsTarget:tableItemsTarget,

			});
			
		}.bind(this))
		.catch(function (error) {
    		
  		});
	}

	prevButtonAction(){
		
		var step=this.state.step;
		if(step>0){
			step=step-1;
			this.setState({step:step});
		}

	}

	generateDataSet(){
		alert("Backend Is not ready Yet. Please look at the console for input Params");
		var params={};
		var icd9codes= this.state.icd9codes;
		var inputfeatures=this.state.inputfeatures;
		var targetfeatures=this.state.targetfeatures;

		var params={
			icd9codes:JSON.stringify(icd9codes),
			inputfeatures:JSON.stringify(inputfeatures),
			targetfeatures:JSON.stringify(targetfeatures)
		}

		var params1={
			icd9codes:icd9codes,
			inputfeatures:inputfeatures,
			targetfeatures:targetfeatures
		}

		console.log('Json format of the param of the post request');
		console.log(params);
		console.log('Json-str format of the param of the post request');
		console.log(params1);
	}

	nextButtonAction(){
		
		var step=this.state.step;

		
		if(step<3){
			step=step+1;
			this.setState({step:step});
		}
	}
	displayPrevNextGenerateData(){

		//Check if data is complete
		var step=this.state.step;
		
		var icd9codes=this.state.icd9codes;
		var inputfeatures=this.state.inputfeatures;
		var targetfeatures=this.state.targetfeatures;

		var thingsTodo=[];




		var flag=0;
		var containsVitalPeriodic=0;

		//Check if there are vitalPeriodic in the input Feature Space.

		Object.keys(inputfeatures).forEach(function(inputfeature){
			if(inputfeatures[inputfeature].dbsource=="vitalPeriodic"){
				containsVitalPeriodic=1;
			}

		})

		if(containsVitalPeriodic==0){
			flag=1;
			thingsTodo.push("Please select atleast one feature From ViatalPeriodic DBSource.");
		}
		if(Object.keys(inputfeatures).length==0){
			flag=1;
			thingsTodo.push("Please Select inputfeatures.");
		}
		if(Object.keys(targetfeatures).length==0){
			flag=1;
			thingsTodo.push("Please Select targetfeatures.");
		}
		if(icd9codes.length==0){
			flag=1;
			thingsTodo.push("Please Select icd9codes.");
		}

		if(step<3){
			flag=1;

		}

		if(flag==1){
		return(
			<div>
			<Button onClick={this.prevButtonAction.bind(this)}>Previous</Button>
			<Button onClick={this.nextButtonAction.bind(this)}>Next</Button>
			<Button disabled > Generate Data Set </Button>
			</div>
			);
		}
		if(flag==0){

			return(
			<div>
			<Button onClick={this.prevButtonAction.bind(this)}>Previous</Button>
			<Button onClick={this.nextButtonAction.bind(this)}>Next</Button>
			<Button onClick={this.generateDataSet.bind(this)}  > Generate Data Set </Button>
			</div>
			);

		}


	}
	render() {
		var a= [];
		if(this.state.alert.flag==0){
		if(this.state.loading==1){
			return(<img className="loading" src="http://www.wallies.com/filebin/images/loading_apple.gif" />);	
		}
		else{

			var step=this.state.step;
			
			var currentStepModule=[];
			if(step==0){
				currentStepModule.push(<center><h1>Select Icd9 Codes</h1></center>);
				currentStepModule.push(<ReactTable
							columns={this.state.tableIcd9.columns.slice(0)}
							data={this.state.tableIcd9.rows.slice(0)}
							filterable
							defaultFilterMethod={(filter, row) => (String(row[filter.id]).includes(filter.value))}
						/>);
			}
			
			if(step==1){
				currentStepModule.push(<center><h1>Select Input Features</h1></center>);
				currentStepModule.push(<ReactTable
							columns={this.state.tableItems.columns.slice(0)}
							data={this.state.tableItems.rows.slice(0)}
							filterable
							defaultFilterMethod={(filter, row) => (String(row[filter.id]).includes(filter.value))}
						/>);
			}
			
			if(step==2){
				currentStepModule.push(<center><h1>Select Target Features</h1></center>);
				currentStepModule.push(<ReactTable
							columns={this.state.tableItemsTarget.columns.slice(0)}
							data={this.state.tableItemsTarget.rows.slice(0)}
							filterable
							defaultFilterMethod={(filter, row) => (String(row[filter.id]).includes(filter.value))}
						/>);
			}

			

			if(step==3){
				currentStepModule.push(<center><h1>Additional Settings</h1></center>);
				currentStepModule.push(
					<div>
						<Checkbox inline disabled checked>
        						Include 24 hour Time stamp
      						</Checkbox>
      						<br/>
      						<Checkbox inline disabled checked>
        						Include Patient id
      						</Checkbox>
      						<br/>

      						<Checkbox inline disabled checked>
        						Include Time since ICU admit
      						</Checkbox>
      						<br/>

      						 Data Sampling: <DropdownButton title="1 hr" id="bg-nested-dropdown" disabled>
      							
    							</DropdownButton>
    						<br/>

					</div>
					);
			}			

			return (
			<Grid>
				<Row>
				<Col sm={12}>
				{this.displayPrevNextGenerateData()}
				</Col>
				</Row>
				<Row>
				

					<Col sm={9}>
						{currentStepModule}
					</Col>

					<Col sm={3}>
						{this.soFarDataCollected()}
						
					</Col>
				</Row>
			</Grid>
		)
		}
		}else{
			return(
				<ListGroupItem bsStyle="danger">Warning: {this.state.alert.message}</ListGroupItem>
			)

		}

		
	}
}

export default ReportingContainer;


