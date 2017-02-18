import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

import * as types from './../types/User_Home_Types';

export function userHome(){
     return function(dispatch){
		fetch('/api/userhome', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if(results != 401){
				dispatch({
					type: types.USER_HOME,
					user: results.name
				})
			} else {
				browserHistory.push('/');
			}
		});
	}
};