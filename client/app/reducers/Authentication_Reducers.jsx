import * as types from './../actions/types/Authentication_Types';

export var createAccountReducer = (state = {}, action) => {
	switch(action.type){
		case types.CREATE_USER:
			return { ...state,
					name: action.name,
					username: action.username,
				}
		default:
			return state;
	}
}

export var loginReducer = (state = {}, action) => {
	switch(action.type){
		case types.LOGIN_USER:
			return {...state, username: action.username}
		default:
			return state;
	}
}

export var logoutReducer = (state = {}, action) => {
	switch(action.type){
		case types.LOGOUT_USER:
			return [
			...state,
			];
		default:
			return state;
	}
}