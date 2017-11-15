/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import './BodyView.css';
import './FlashingImg.css';
import { Image } from 'react-bootstrap';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Measure from 'react-measure';

// Importing images...
import bodyImg from '../img/FullHumanBody.png';
import bodyImgOk from '../img/HumanBodyOk.png';
//Kidney status;
import kidneysWarning from '../img/kidneys/kidneyswarning.png';
import kidneysDanger from '../img/kidneys/kidneysdanger.png';
//Heart status;
import heartWarning from '../img/heart/heartwarning.png';
import heartDanger from '../img/heart/heartdanger.png';
//Liver status;
import liverWarning from '../img/liver/liverwarning.png';
import liverDanger from '../img/liver/liverdanger.png';
//Lungs status;
import lungsWarning from '../img/lungs/lungswarning.png';
import lungsDanger from '../img/lungs/lungsdanger.png';
//Immune status;
import immuneWarning from '../img/immune/immunewarning.png';
import immuneDanger from '../img/immune/immunedanger.png';
//Veins status;
import veinsWarning from '../img/veins/veinswarning.png';
import veinsDanger from '../img/veins/veinsdanger.png';
//Pancreas status;
import pancreasWarning from '../img/pancreas/pancreaswarning.png';
import pancreasDanger from '../img/pancreas/pancreasdanger.png';
//Intestines status;
import intestinesWarning from '../img/intestines/intestineswarning.png';
import intestinesDanger from '../img/intestines/intestinesdanger.png';
//Brain status;
import brainWarning from '../img/brain/brainwarning.png';
import brainDanger from '../img/brain/braindanger.png';

var organs = {
	renal: {
		warning: kidneysWarning,
		danger: kidneysDanger
	},
	cardio: {
		warning: heartWarning,
		danger: heartDanger
	},
	liver: {
		warning: liverWarning,
		danger: liverDanger
	},
	respiratory: {
		warning: lungsWarning,
		danger: lungsDanger
	},
	immune: {
		warning: immuneWarning,
		danger: immuneDanger
	},
	hematological: {
		warning: veinsWarning,
		danger: veinsDanger
	},
	endocrine: {
		warning: pancreasWarning,
		danger: pancreasDanger
	},
	gastroIntestinal: {
		warning: intestinesWarning,
		danger: intestinesDanger
	},
	neurological: {
		warning: brainWarning,
		danger: brainDanger
	}
};

class BodyView extends Component {
	constructor(props) {
    super(props);
    this.height = props.height;
    this.state = {
    	display: true,
    	mounted: true
    };
  }
	componentDidMount() {
		var self = this;
    var intervalId = setInterval(function() {
    	if(self.state.mounted === true) {
    		self.setState((prevState, props) => {
					return {display: !prevState.display};
				});
    	}
    }, 1000);
    self.setState({intervalId: intervalId});
	}
	componentWillUnmount() {
		var self = this;
		clearInterval(self.state.intervalId);
	}
  render() {
		var displayFlashingImg = (imgSrc, time) => {
			if (this.state.display) {
				return (<Image
					src={imgSrc}
					alt="body status danger"
					className="body bodystatus" 
				/>);
			} else {
				return;
			}
		}
		var flashingImg = (imgSrc) => {
		  return (
		  	<div key={imgSrc}>
		      <CSSTransitionGroup
		        transitionName="flashingImg"
		        transitionEnterTimeout={500}
		        transitionLeaveTimeout={300}
		      >
		      {displayFlashingImg(imgSrc, 1000)}
		      </CSSTransitionGroup>
		    </div>
		  );
		}

		var getOrganStatus = (organ, organSystems, organsKey) => {
			// loop through each status type (so warning and danger)
				var organStatus = 4;
				// find the organ object in organSystems that matches t<he currently selected organ
				Object.keys(organSystems).some( (organSystemKey) => {
					// if the organSystem's key matches the organ key, then set the organ status
					// equal to that organ system's status
					if (organSystemKey === organsKey) {
						organStatus = organSystems[organSystemKey].status;
						// return true to exit out of .some()
						return true;
					} else {
						return false;
					}
				});
				return organStatus;
		}

		var renderOrganStatus = (organsObj, organSystems) => {
			// convert the organs object to an array and use map to call render organ
			// also pass the individual organ system from the organSystems state into the function
			return Object.keys(organsObj).map((key) => {
					var organStatus = getOrganStatus(organsObj[key], organSystems, key);
					if (organStatus === 2) {
						return ( <Image src={organsObj[key].warning} key={key} alt="organ status warning" className="body bodystatus" />);
					} else if (organStatus === 3) {
						return flashingImg(organsObj[key].danger);
					}
			});
		}

		
    return (
    		<div style={{clear: "both"}} className="bodyContainer">
    				<Measure
							onMeasure={(dimensions) => {
			          this.props.updateStyle(dimensions);
			        }}
    				>
    					<Image alt="body" className="body" src={bodyImg} />
    				</Measure>
		    		<Image alt="body status ok" className="body bodystatus" src={bodyImgOk} />
		    		{/* pass in the object holding the organ objects which contain the image references.*/}
		    		{/* also pass in the organSystems state object */}
		    		{renderOrganStatus(organs, this.props.organSystems)}
	    	</div>
    );
  }
}

export default BodyView;