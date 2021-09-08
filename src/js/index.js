//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "./icons.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import your own components
const SimpleCounter = props => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<FontAwesomeIcon icon={["far", "clock"]} />
			</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
};
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={one.toString()[one.toString().length - 1]}
			digitTwo={two.toString()[two.toString().length - 1]}
			digitThree={three.toString()[three.toString().length - 1]}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
