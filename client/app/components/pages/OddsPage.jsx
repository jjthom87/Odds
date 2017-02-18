import React, { Component } from 'react';
import { Link } from 'react-router';

import MainNavBar from './../navs/MainNavBar';

export default class OddsPage extends Component {
	render() {
		return (
			<div>
				<MainNavBar/>
				<div className = "row">
					<div className="column small-centered small-11 medium-6 large-5 regdiv">
						<div className="container" id="regdiv">
						<Link to="/userhome">Home Page</Link>
						<h1>Create an Event. Set the rules. Input Data. Get Percentages</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}