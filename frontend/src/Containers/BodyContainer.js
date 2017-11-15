/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import './BodyContainer.css';
import OrganSystemButtons from '../Views/OrganSystemButtons';
import OrganSystemDetailsView from '../Views/OrganSystemDetailsView';
import BodyView from '../Views/BodyView';
import { Col, Row, Grid } from 'react-bootstrap'; 
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import {Router, Route, browserHistory, IndexRoute} from "react-router";
import PatientContainer from './PatientContainer';
import OverviewContainer from './OverviewContainer';
import ReportingContainer from './ReportingContainer';
import EicuContainer from './eicuContainer';
import TopNavbar from '../Views/TopNavbar';
import _ from 'lodash/core';

class BodyContainer extends Component {
	constructor(props) {

		super(props);
		this.state = {
			
		};
		this.copyText = (text) => {
			this.setState((prevState, props) => {
				var copiedText = prevState.copiedText;
				copiedText.push(text);
				return {copiedText: copiedText};
			});
		};
  }
  render() {
  	
		return (
			<Router>
					<div>
						<TopNavbar
							
						/>
						<Route path="/datagen" render={() => {

							return (
								<EicuContainer />
							)
						}} />
					</div>
					
			</Router>
			
		);
  }
}


export default BodyContainer;