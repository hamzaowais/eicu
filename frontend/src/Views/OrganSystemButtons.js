/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Col, ButtonGroup } from 'react-bootstrap';
import './OrganSystemButtons.css';
// this function loops through the organ system status' and returns the buttons in the proper order
// Note: atm order is not sorted, it just maps out the buttons


class OrganSystemButtons extends Component {
  render() {
  	var renderButton = (name, style, key) => {
			return (
				<Button
					key={key}
					block
					bsStyle={style}
				>
				<p className="buttonText">
				{name}
				</p>
				</Button>
			)
  	}
		var mapOrganSystemButtons = (organSystemStatus) => {
			var sortedOrganSystems = Object.keys(organSystemStatus).sort(function(a,b){return organSystemStatus[b].status-organSystemStatus[a].status});
			
			return sortedOrganSystems.map( (key) => {
				var systemName = organSystemStatus[key].name;
				var status = organSystemStatus[key].status;
				var statusStyle = "primary";

				if (status === 1) {
					statusStyle = "success";
				} else if (status === 2) {
					statusStyle = "warning";
				} else if (status === 3) {
					statusStyle = "danger";
				} else {
					statusStyle = "primary";
				}
				
				return renderButton(systemName, statusStyle, key)
			})
		}
    return (
    	<div>
		    <Col xs={12} className="buttonContainer">
		    {/*<ButtonGroup vertical>*/}
		    		{mapOrganSystemButtons(this.props.organStatus)}
		    {/*</ButtonGroup>*/}
		    </Col>
	    </div>
    );
  }
}

export default OrganSystemButtons;