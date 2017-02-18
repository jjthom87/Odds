import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import LoginForm from './../user_forms/LoginForm';

export default class LoginPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="column small-centered small-11 medium-6 large-5">
					<div className="container">
						<LoginForm/>
						<p className="animated fadeInDown" id="loginText">If you haven't registered yet</p>
						 	<p className="animated fadeInDown" id="loginText">Please go to the Sign Up Page!</p>
					</div>
				</div>
			</div>
		);
	}
}