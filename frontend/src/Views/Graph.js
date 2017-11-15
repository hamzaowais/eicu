// first of course react!
import React, {Component} from 'react';
// require `react-d3-core` for Chart component, which help us build a blank svg and chart title.
// require `react-d3-basic` for Line chart component.
var LineChart = require('react-d3-basic').LineChart;
import './Graph.css';

var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 40, bottom: 50},
    title = "Age to BMI",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ],
    // your x accessor
    x = function(d) {
      return d.age;
    }
var chartData = [
  {
    name: "Lavon Hilll I",
    BMI: 20.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1
  },
  {
    name: "Clovis Pagac",
    BMI: 24.28,
    age: 26,
    birthday: "1995-11-10T00:00:00.000Z",
    city: "South Eldredtown",
    married: false,
    index: 3
  },
  {
    name: "Gaylord Paucek",
    BMI: 24.41,
    age: 30,
    birthday: "1975-06-12T00:00:00.000Z",
    city: "Koeppchester",
    married: true,
    index: 5
  },
  {
    name: "Ashlynn Kuhn MD",
    BMI: 23.77,
    age: 32,
    birthday: "1985-08-09T00:00:00.000Z",
    city: "West Josiemouth",
    married: false,
    index: 6
  },
];


class Graph extends Component {
	render() {
		return (
			<div id="chartContainer">
		      <LineChart
		        margins={margins}
		        title={title}
		        data={this.props.last24Hour}
		        width={width}
		        height={height}
		        chartSeries={chartSeries}
		        x={x}
		      />
	    </div>
		);
	}
}

export default Graph;