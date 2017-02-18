import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/Authentication_Index';

export var LoginForm = React.createClass({
	onLoginSubmit: function(e){
		e.preventDefault();

		var creds = {};
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var {dispatch} = this.props;

		if (username.length > 0) {
			this.refs.username.value = '';
			creds.username = username;
		}

		if (password.length > 0) {
			this.refs.password.value = '';
			creds.password = password;
		}

		dispatch(actions.loginUser(username, password));
	},
	render: function() {
		return (
			<div>
				<div id="loginForm">
					<form onSubmit={this.onLoginSubmit}>
						<h1 id="loginText"> Login </h1>
						<div id="submitButton">
							<span className="glyphicon glyphicon-user"><input type="text" ref="username" placeholder="Enter Username"/></span>
						</div>
						<div id="submitButton">
							<span className="glyphicon glyphicon-lock"><input type="password" ref="password" placeholder="Enter Password"/></span>
						</div>
						<div id="submitButton">
							<input className="btn btn-default" type="submit" value="Login"/>
						</div>
					</form>
				</div>
			</div>
		);
	}
})

export default connect()(LoginForm);