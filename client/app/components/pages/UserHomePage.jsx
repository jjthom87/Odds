import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';

import MainNavBar from './../navs/MainNavBar';

export var UserHomePage = React.createClass({
  	componentWillMount: function(){
  		this.props.dispatch(actions.userHome())
	},
	render: function() {
    	return (
      		<div>
      			<MainNavBar/>
      			<Link to="/odds">Odds Page</Link>
	      		<h1 className="text-center" id="pageTitle">Hello {this.props.userHome.user}, Welcome to JobTrackApp</h1>
      		</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	}
)(UserHomePage);