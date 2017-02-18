import React from "react";
import { Route } from "react-router";

// REQUIRE COMPONENTS==========================================================
// Parent
import Application from "./components/Application"
// Children
import HomePage from "./components/pages/HomePage";
import CreateAccountPage from './components/pages/CreateAccountPage';
import LoginPage from './components/pages/LoginPage';
import UserHomePage from './components/pages/UserHomePage';
import OddsPage from './components/pages/OddsPage';

// COMPONENT ROUTES============================================================
export default (
	<Route component={Application}>
    	<Route path="/" component={HomePage}/>
        <Route path="/register" component={CreateAccountPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/userhome" component={UserHomePage}/>
        <Route path="/odds" component={OddsPage}/>
    </Route>
);