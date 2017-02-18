import React, { Component } from 'react';

import CreateAccountForm from './../user_forms/CreateAccountForm';
import LandingNavBar from './../navs/LandingNavBar';

export default class CreateAccountPage extends Component {
	render() {
		return (
			<div>
				<LandingNavBar/>
				<div className = "row">
					<div className="column small-centered small-11 medium-6 large-5 regdiv">
						<div className="container" id="regdiv">
							<CreateAccountForm/>
							<p className="animated fadeInDown" id="loginText">Already have an account? Please login</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}