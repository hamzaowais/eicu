/*jslint node: true, esversion:6 */

import React, { Component } from 'react';
import { Col, Row, Grid, Button, Glyphicon, Panel,FormGroup,ControlLabel,FormControl,Checkbox,Form, FieldGroup } from 'react-bootstrap';
import _ from 'lodash/core';
import uuidV4 from 'uuid/v4';
import './AddReportContainer.css';
import ReactTable from 'react-table';
//import 'react-table/react-table.css'
import json2csv from 'json2csv';
import fs from 'fs';
import fileDownload from 'react-file-download';
import request from 'request';
import axios from 'axios';
import queryString from 'query-string';
//import Hyperlink from 'react-native-hyperlink'


class ReportingContainer extends Component {
	constructor(props) {
		super(props);		
		this.state = {};
	}
	addReport() {
		console.log('ddd');
	}
	

	render() {
		const white={
			'background-color': 'white'
		}
		
		var a= [];
		return (
			<Grid>
				<Row>
					<h3>Add Report</h3>
				</Row>
				<Row>
					<form onSubmit={this.addReport}>

					<FormGroup controlId="REPORT_NAME">
					    <b><ControlLabel>REPORT NAME</ControlLabel></b>
					    <FormControl name="REPORT_NAME" type="text" placeholder="Enter the REPORT NAME" style={white}  />
					  </FormGroup>

					  <FormGroup controlId="SQL_QUERY">
					    <b><ControlLabel>SQL QUERY</ControlLabel></b>
					    <FormControl name="SQL_QUERY" componentClass="textarea" placeholder="Enter the Query" style={white} row={30} />
					  </FormGroup>

					  <FormGroup controlId="REPORT_PARAM">
					    <b><ControlLabel>REPORT PARAM</ControlLabel></b>
					    <FormControl name="REPORT_PARAM" componentClass="textarea" placeholder="Enter the REPORT_PARAM" style={white}  />
					  </FormGroup>
					  

					  <FormGroup controlId="DESCRIPTION">
					    <b><ControlLabel>QUERY DESCRIPTION</ControlLabel></b>
					    <FormControl name="DESCRIPTION" componentClass="textarea" placeholder="Enter the DESCRIPTION" style={white}  />
					  </FormGroup>

					  <FormGroup controlId="PARENT_ID">
					    <b><ControlLabel>PARENT ID</ControlLabel></b>
					    <FormControl name="DESCRIPTION" type="text" placeholder="Enter the Parent ID" style={white}  />
					  </FormGroup>

					  <FormGroup controlId="DATABASE_NAME">
					    <b><ControlLabel>DATABASE NAME</ControlLabel></b>
					    <FormControl name="DATABASE_NAME" type="text" placeholder="Enter the DATABASE NAME" style={white}  />
					  </FormGroup>

					   <FormGroup controlId="Category">
					    <b><ControlLabel>DATABASE NAME</ControlLabel></b>
					    <FormControl name="Category" type="text" placeholder="Enter the Category" style={white}  />
					  </FormGroup>


					  
					 <Button type="submit">
					    Submit
					  </Button>
					</form>
				</Row>
				<Row>
					
				</Row>
			</Grid>
		)
	}
}

export default ReportingContainer;