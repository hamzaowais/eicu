import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import _ from 'lodash';
var LineChart = require('react-d3-basic').LineChart;
import request from 'request';
import './cardioView.css';
import Measure from 'react-measure';

var margins = {left: 50, right: 50, top: 50, bottom: 50},
    title = "Heart Rate",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'value',
        name: 'Heart Rate'
      }
    ],
    // your x accessor
    x = function(d) {
    	var date = new Date(d.time);
    	return date;
    },
    xLabel="Time"
class CardioView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {},
			data: {
				last24Hour: [
			    {
			      "time": "2017-05-18 13:49:28",
			      value: 54
			    },
			    {
			      "time": "2017-05-18 14:49:28",
			      value: 88
			    },
			    {
			      "time": "2017-05-18 15:49:28",
			      value: 92
			    },
			    {
			      "time": "2017-05-18 16:49:28",
			      value: 77
			    },
			    {
			      "time": "2017-05-18 17:49:28",
			      value: 48
			    },
			    {
			      "time": "2017-05-18 18:49:28",
			      value: 46
			    },
			    {
			      "time": "2017-05-18 19:49:28",
			      value: 49
			    },
			    {
			      "time": "2017-05-18 20:49:28",
			      value: 100
			    },
			    {
			      "time": "2017-05-18 21:49:28",
			      value: 88
			    },
			    {
			      "time": "2017-05-18 22:49:28",
			      value: 40
			    },
			    {
			      "time": "2017-05-18 23:49:28",
			      value: 93
			    },
			    {
			      "time": "2017-05-19 00:49:28",
			      value: 46
			    },
			    {
			      "time": "2017-05-19 01:49:28",
			      value: 54
			    },
			    {
			      "time": "2017-05-19 02:49:28",
			      value: 91
			    },
			    {
			      "time": "2017-05-19 03:49:28",
			      value: 92
			    },
			    {
			      "time": "2017-05-19 04:49:28",
			      value: 83
			    },
			    {
			      "time": "2017-05-19 05:49:28",
			      value: 68
			    },
			    {
			      "time": "2017-05-19 06:49:28",
			      value: 83
			    },
			    {
			      "time": "2017-05-19 07:49:28",
			      value: 59
			    },
			    {
			      "time": "2017-05-19 08:49:28",
			      value: 98
			    }
			  ]
			}
		}
	}

	render() {
		return (
			<Measure
				onMeasure={(dimensions) => {
					console.log(dimensions);
					this.setState({dimensions});
				}}
				useClone={true}
			>
				<div>
					<Col sm={4}>
						<p>Heart Rate</p>
					</Col>
					<Col sm={4}>
						<p>100</p>
					</Col>
					<Col sm={4}>
						
					</Col>
					<Col sm={12}>
						<LineChart
			        title={title}
			        data={this.state.data.last24Hour}
			        width={600}
			        height={300}
			        chartSeries={chartSeries}
			        x={x}
			        xScale='time'
			      />
					</Col>
				</div>
			</Measure>
		)
	}
}

export default CardioView;