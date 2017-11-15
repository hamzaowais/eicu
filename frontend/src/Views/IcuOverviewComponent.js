/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import { Col, Row, ButtonToolbar, MenuItem, SplitButton} from 'react-bootstrap';
import BodyView from './BodyView';
import uuidV4 from 'uuid/v4';
import './IcuOverviewComponent.css';
import { LinkContainer } from 'react-router-bootstrap';
import StatusText from './StatusText';
var style={};
const views = {
	overall: {
		index: 1
	},
	renal: {
		index: 2
	},
	cardio: {
		index: 3
	},
	liver: {
		index: 4
	},
	respiratory: {
		index: 5
	},
	immune: {
		index: 6
	},
	hematological: {
		index: 7
	},
	endocrine: {
		index: 8
	},
	gastroIntestinal: {
		index: 9
	},
	neurological: {
		index: 10
	}
};

class IcuOverviewComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			style: style
		};
	}
	renderColoredText(color, text) {
		return (<p style={{color: color}} className="statusText" key={uuidV4()}>{text}</p>);
	}

	handleRoute(route) {
		if(route.index === views.overall.index) {
			return (
				<StatusText
					organSystems={this.props.organSystems}
				/>
			);
		}
	}

	mapMenuItems(organSystems) {
		Object.keys(organSystems).map((key) => {
			return (
				<MenuItem eventKey={views[key].index} id={organSystems[key].name}>{organSystems[key].name}</MenuItem>
			)
		})
	}
	updateStyle(style) {
		this.setState({style: style});
	}
	render() {
		return(
			<div>
				<Row>
				<Col xs={1} />
				<Col xs={10}>
					<div style={{height: this.state.style.height + 10}} className="minimapContainer">
						<Row>
							<Col xs={4}>
									<BodyView
										organSystems={this.props.organSystems}
										updateStyle={(style) => {this.updateStyle(style)}}
									/>
							</Col>
							<Col xs={8}>
								<div className="statusContainer" style={{height: this.state.style.height - 20}}>
									<div style={{height: '95%'}}>
										<Col xs={12} className="statusTextContainer">
											{this.handleRoute(this.props.route)}
										</Col>
										<Col xs={12} className="viewButton">
											
										</Col>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</Col>
				<Col xs={1} />
			</Row>
			<Row>
				<div style={{height: '20px'}} />
			</Row>
			</div>
		)
	}
}

export default IcuOverviewComponent;