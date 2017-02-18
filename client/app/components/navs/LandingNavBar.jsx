import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingNavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation" id="mainNav1">
					<div className="container">
						<div className="collapse navbar-collapse main-nav" id="bubo-main-nav">
							<ul className="nav navbar-nav navbar-right" id="mainNavli">
								<li><Link to="/login">Login</Link></li>
								<li><Link to="/register">Register</Link></li>
							</ul>
						</div>
					</div>
				</nav>
            </header>
        )
    }
}