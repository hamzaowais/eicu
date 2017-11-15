import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
class OverallView extends Component {
	render() {
		return (
			<div>
				<Col sm={4}>
					<p>Heart Rate</p>
				</Col>
				<Col sm={4}>
					<p>100</p>
				</Col>
				<Col sm={4}>
					
				</Col>
			</div>
		)
	}
}

export default OverallView;