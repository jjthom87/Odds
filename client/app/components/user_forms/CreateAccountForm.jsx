import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/Authentication_Index';

export var CreateAccountForm = React.createClass({
	onCreateUser: function(e){
		e.preventDefault();

		var name = this.refs.name.value;
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var confirmPassword = this.refs.confirmPassword.value;
		var {dispatch} = this.props;

		if (name.length > 0) {
			this.refs.name.value = '';
		} else {
			this.refs.name.value = '';
			alert('Please Enter Name/Nickname')
		}

		if (username.length > 0) {
			this.refs.username.value = '';
		} else {
			this.refs.usernamename.value = '';
			alert('Please Enter Username');
		}

		if(username.length > 5 && username.length < 12){
			this.refs.username.value = '';
    	} else {
    		this.refs.username.value = '';
      		alert('Username must be between 6 and 12 characters');
    	}

		if (password.length > 7) {
			this.refs.password.value = '';
		} else {
			this.refs.password.value = '';
			alert('Password Must be at least 8 characters');
		}

		if (confirmPassword.length > 0) {
			this.refs.confirmPassword.value = '';
		} else {
			alert('Please confirm password');
		}

		if (confirmPassword === password){
			this.refs.confirmPassword.value = '';
		} else {
			this.refs.confirmPassword.value = '';
			alert("Passwords don't match");
		}
		dispatch(actions.createNewAccount(name, username, password, confirmPassword));
	},
	render: function() {
		return (
			<div>
				<div id="accountForm">
					<form onSubmit={this.onCreateUser}>
						<div>
							<h1 id="loginText">Create Account</h1>
						</div>
						<div id="submitButton">
							<div>
								<span className="glyphicon glyphicon-sunglasses"><input type="text" ref="name" placeholder="Enter Name/Nickname"/></span>
							</div>
							<div>
								<span className="glyphicon glyphicon-user"><input type="text" ref="username" placeholder="Enter Username"/></span>
							</div>
							<div>
								<span className="glyphicon glyphicon-lock"><input type="password" ref="password" placeholder="Enter Password"/></span>
							</div>
							<div>
								<span className="glyphicon glyphicon-lock"><input type="password" ref="confirmPassword" placeholder="Confirm Password"/></span>
							</div>
							<div id="submitButton">
								<input className="btn btn-default" type="submit" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

export default connect()(CreateAccountForm);