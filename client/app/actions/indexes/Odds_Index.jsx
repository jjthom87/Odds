import fetch from 'isomorphic-fetch';

import * as types from './../types/Odds_Types';

export function createOddsForm(newOdds){
	return { type: types.CREATE_ODDS, newOdds }
};

export function createNewAccount(name, username, password, confirmPassword){
     return function(dispatch){
		dispatch(createAccountForm(name,username,password,confirmPassword));
		const newUser = {name, username, password, confirmPassword};
		fetch('/api/users/create', {
			method: 'post',
			body: JSON.stringify(newUser),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
		.then((results) => {
		});
	}
};