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
		var elert={ 
			flag:0,
			message:"No Elert- This is asystem Error Please contact admin"
		}
		var query=queryString.parse(this.props.match.location.search);
		this.state = {
			loading:0,
			elert:elert,
			query:query,
			table: {
				sort: {
					column: "age",
					order: "desc"
				},
				columns: [
					{
		        Header: 'ID',
		        accessor: 'id'
		      },
		      {
		        Header: 'AGE',
		        accessor: 'age'
		      },
		      {
		        Header: 'SEX',
		        accessor: 'sex'
		      },
		      {
		      	Header: 'DIAGNOSIS',
		      	accessor: 'diagnosis',
		      },
		      {
		      	Header: 'LOS',
		      	accessor: 'los'
		      }
	      ],
				rows: [
					{
						id: "LOADING DATA",
						age: "LOADING DATA",
						sex: "LOADING DATA",
						diagnosis: "LOADING DATA",
						los: "LOADING DATA"
					}
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
	renderFormParams() {
		

		if(this.state.report_params !=null && typeof this.state.report_params ==='object' && Object.keys(this.state.report_params).length>0){
		var params= this.state.report_params;
		var formgroups=[];

		Object.keys(params).forEach(function(label){
			formgroups.push(
								<FormGroup >
									<Col componentClass={ControlLabel} sm={2}>
									{label}
									</Col>
									<Col sm={10}>
        								<FormControl type= {params[label].INPUT_TYPE} placeholder={params[label].INPUT_TYPE} name={label}/>
      								</Col>
      							</FormGroup>
				);
				
		});

		return(
				<div>
					<Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          				Advance Options
        			</Button>
    				<Panel collapsible expanded={this.state.open}>
          				<Form horizontal>
    						{formgroups}
    						<FormGroup>
    							<FormControl type= "hidden" value={this.state.REPORT_ID} name='REPORT_ID'/>
    						</FormGroup>
    						<FormGroup>
      							<Col smOffset={2} sm={10}>
        							<Button type="submit">
          								Generate Report
        							</Button>
      							</Col>
    						</FormGroup>
  						</Form>	
  					</Panel>		
  				</div>
			);
		}
	}
	componentDidMount() {

		var query=this.state.query;
		 var params={};
		 var REPORT_ID;
		Object.keys(query).forEach(function(key){
			params[key]=query[key];
			if(key=='REPORT_ID'){
				REPORT_ID=params[key];
				
			}
		});
		this.setState({REPORT_ID:REPORT_ID});

		axios.get(backendlink.backendlink+'/getreport', {

    		params: params
  		})
		.then(function (response) {
    		
    		var tables={};
			var data=response.data.data;	
			data.forEach(function(row){

				Object.keys(row).forEach(function(key){
					if(typeof row[key] === "string"){

					if(row[key].includes('link</a>')||row[key].includes('<!--HTML-->')){
						row[key]=<div dangerouslySetInnerHTML={{__html: row[key]}} />;
					}
					}
				});
			});
			
			tables.rows=data;
			if(data.length>0){
				
				tables.columns= new Array();
				
				Object.keys(data[0]).forEach(function (value){
				var temp = {};
				temp.Header=  value;
		    	temp.accessor= value;
		    	temp.id=value;
		    	temp.filterMethod= function(filter, row) {
		    		if(row[filter.id] == null){
		    			return false;
		    		}
		    		var a =row[filter.id].toLowerCase();
		    		var b =  filter.value.toLowerCase();
		    		return a.includes(b);
		    	}
		    	tables.columns.push(temp);
				});
				
				this.setState({table:tables});
				this.setState({report_name:response.data.name});
				this.setState({report_params:response.data.params});
				this.setState({report_description:<div dangerouslySetInnerHTML={{__html: response.data.description}} />});
				this.setState({loading:0});
			}else{
				var elert={
					flag:1,
					message:"No data found in this Report"
				}
				this.setState({elert:elert});
			}

		}.bind(this))
		.catch(function (error) {
    		
  		});
	}
	render() {
		var a= [];
		if(this.state.elert.flag==0){
		if(this.state.loading==1){
			return(<img className="loading" src="http://www.wallies.com/filebin/images/loading_apple.gif" />);	
		}
		else{
			return (
			<Grid>
				<Row>
					<h3>{this.state.report_name}</h3>
					<p>Description:{this.state.report_description}</p>
				</Row>
				<Row>
					{this.renderFormParams()}
				</Row>
				<Row>
					<Button onClick={() => {
							var fields = this.state.table.columns.map((item) => {
								return item.accessor;
							});
							var results = json2csv({data: this.state.table.rows, fields: fields});
							fileDownload(results, 'results.csv');
						}}
						style={{
							margin: '10px'
						}}
					>
						<Glyphicon glyph="download" />
					</Button>

					<Col sm={12}>
						<ReactTable
							columns={this.state.table.columns}
							data={this.state.table.rows}
							filterable
							filterMethod={function(filter, row,  column) {

								const id = filter.pivotId || filter.id;
    							return row[id] !== undefined ? String(row[id]).includes(filter.value) : true;

								}}
							
						/>
					</Col>
				</Row>
			</Grid>
		)
		}
		}else{
			return(
				<ListGroupItem bsStyle="danger">Warning: {this.state.elert.message}</ListGroupItem>
			)

		}

		
	}

}

export default ReportingContainer;