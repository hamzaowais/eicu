/*jslint node: true, esversion:6 */
"use strict";
import React, { Component } from 'react'; 
import { Col, Row, Grid, Button, Glyphicon, Panel,FormGroup,ControlLabel,FormControl,Checkbox,Form,ListGroupItem } from 'react-bootstrap';
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
		        accessor: 'history'
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

	handleButtonClickSelectItem(row){
		var tableItems=this.state.tableItems;
		var rows=tableItems.rows;
		var inputfeatures=this.state.inputfeatures;
		

		var original= row.original;
		var select = original.select;
		var index= original.index;

		if(select=='not selected'){
			
			inputfeatures[row.value]=0;
			rows[index].select='icd9 selected';
		}else{
			rows[index].select='not selected';
			
			if(indexInputfeatures[row.value]){
				delete indexInputfeatures[row.value];
			}
		}
		tableItems.rows=rows.slice(0);
		
		



		this.setState({
			tableItems:tableItems,
			inputfeatures:inputfeatures
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

		return(
			<div>
			<div>
			<b>Selected icd9codes</b>: {icd9codes.join('	||	')}
			</div>

			<div>
			<b>Selected Input Features</b>: {inputfeatures.join('	||	')}
			</div>

			</div>
			);

	}
	componentDidMount() {


		axios.get(backendlink.backendlink+'/getInitialData')
		.then(function (response) {
    		
    		var tableIcd9=this.state.tableIcd9;
    		var tableItems=this.state.tableItems;
			var data=response.data;	
			var icds=data.icd9Code;
			var items=data.items;


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

			
			this.setState({
				tableIcd9:tableIcd9,
				tableItems:tableItems
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

	nextButtonAction(){
		
		var step=this.state.step;
		if(step<2){
			step=step+1;
			this.setState({step:step});
		}
	}
	displayPrevNextGenerateData(){

		//Check if data is complete

		return(
			<div>
			<Button onClick={this.prevButtonAction.bind(this)}>Previous</Button>
			<Button onClick={this.nextButtonAction.bind(this)}>Next</Button>
			<Button disabled > Generate Data Set </Button>
			</div>
			);
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
			if(step==1){
				currentStepModule.push(<center><h1>Select Icd9 Codes</h1></center>);
				currentStepModule.push(<ReactTable
							columns={this.state.tableIcd9.columns.slice(0)}
							data={this.state.tableIcd9.rows.slice(0)}
							filterable
							defaultFilterMethod={(filter, row) => (String(row[filter.id]).includes(filter.value))}
						/>);
			}
			
			if(step==0){
				currentStepModule.push(<center><h1>Select Input and Target Features</h1></center>);
				currentStepModule.push(<ReactTable
							columns={this.state.tableItems.columns.slice(0)}
							data={this.state.tableItems.rows.slice(0)}
							filterable
							defaultFilterMethod={(filter, row) => (String(row[filter.id]).includes(filter.value))}
						/>);
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


