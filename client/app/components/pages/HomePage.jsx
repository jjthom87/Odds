import React, { Component } from 'react';

import LandingNavBar from './../navs/LandingNavBar';

export default class HomePage extends Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
	render() {
    	return (
      		<div>
      			<LandingNavBar/>
	      		<h1 className="text-center" id="pageTitle">Welcome to JobAppTrack. Please Login or Signup</h1>
      		</div>
		);
	}
}