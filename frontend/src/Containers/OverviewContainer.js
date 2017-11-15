/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import IcuOverviewComponent from '../Views/IcuOverviewComponent';
class overviewContainer extends Component {
	filterColumnCount(columnCount) {
		var filteredColumnCount = 3;
		if(columnCount >= 4) {
			filteredColumnCount = 4;
		} else if (columnCount <= 0) {
			filteredColumnCount = 1;
		} else {
			filteredColumnCount = columnCount;
		}
		return filteredColumnCount;
	}
	renderRows(rowCount, columnCount) {
		var rows = [];
		var columns = [];
		for(var i = 0; i < rowCount; i++) {
			for(var b = 0; b < this.filterColumnCount(columnCount); b++) {
				columns.push( 
					<Col sm={12/this.filterColumnCount(columnCount)} key={'col'+b+'-'+i}>
						<IcuOverviewComponent
							route={this.props.route}
							organSystems={this.props.organSystems}
						/>
					</Col>
				);
			}
			rows.push(
				<div key={'row'+i}>
					<Row>
						{columns}
					</Row>
					<Row>
						<div style={{height: '20px'}} />
					</Row>
				</div>
			);
			columns = [];
		}
		return rows;
	}
	render() {
		return (
			<Grid>
			  {this.renderRows(2,3)}
			</Grid>
		)
	}
}

export default overviewContainer;