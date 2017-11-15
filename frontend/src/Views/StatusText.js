/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import uuidV4 from 'uuid/v4';
import BodyView from './BodyView';
import './StatusText.css';

class StatusText extends Component {
	renderColoredText(color, text) {
		return (<p style={{color: color}} className="statusText" key={uuidV4()}>{text}</p>);
	}
	renderSystemStatus(organSystems) {
		var sortedOrganSystems = Object.keys(organSystems).sort(function(a,b){return organSystems[b].status-organSystems[a].status});
		var systemsOk = true;
		var filteredSystems = sortedOrganSystems.filter((key) => {
			if(organSystems[key].status === 2 || organSystems[key].status === 3) {
				return true;
			} else {
				return false;
			}
		});
		var output = filteredSystems.map((key) => {
			var color = '#0064e0';
			if (organSystems[key].status === 2) {
				systemsOk = false;
				color = '#ff9d49';
				return this.renderColoredText(color, organSystems[key].name);
			} else if (organSystems[key].status === 3) {
				systemsOk = false;
				color = '#ff3d3d';
				return this.renderColoredText(color, organSystems[key].name);
			}
		});
		if(systemsOk === true && output[0] == null) {
			return this.renderColoredText('#49ff4f', 'All systems [OK]');
		} else {
			return output;
		}
	}
	render() {
		return (
			<div>
				{this.renderSystemStatus(this.props.organSystems)}
			</div>
		);
	}
}

export default StatusText;