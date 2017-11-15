import React, { Component } from 'react';
import './OrganSystemDetailsView.css';
import OverallView from './patientDetailsViews/overallView';
import CardioView from './patientDetailsViews/cardioView';


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

class OrganSystemDetailsView extends Component {
	constructor(props) {
		super(props);
	}
	
	handleRoute(route) {
		if(route.index === views.overall.index) {
			return (
				<OverallView />
			)
		} if (route.index === views.cardio.index) {
			return (
				<CardioView
					subjectId={1}
					icustayId={1}
					hadmId={1}
					itemId={1}
				/>
			)
		}
	}
	updateStyle(style) {
		this.setState({style: style});
	}
  render() {
    return (
    	<div className="patientDataContainer">
    		{this.handleRoute(this.props.route)}
    	</div>
    );
  }
}

export default OrganSystemDetailsView;