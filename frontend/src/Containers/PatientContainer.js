import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import OrganSystemButtons from '../Views/OrganSystemButtons';
import OrganSystemDetailsView from '../Views/OrganSystemDetailsView';
import BodyView from '../Views/BodyView';

class PatientContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<Grid>
			  <Row>
					<Col sm={2}>
						<OrganSystemButtons
							organStatus={this.props.organSystems}
						/>
					</Col>
					<Col sm={3}>
							<BodyView
								organSystems={this.props.organSystems}
							/>
					</Col>
					<Col sm={7}>
						<OrganSystemDetailsView
							route={this.props.route}
						/>
					</Col>
			  </Row>
			</Grid>
		);
	}
}

export default PatientContainer;