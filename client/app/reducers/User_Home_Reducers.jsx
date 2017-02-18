import * as types from './../actions/types/User_Home_Types';

export var userHomeReducer = (state = {}, action) => {
	switch(action.type){
		case types.USER_HOME:
			return { ...state, user: action.user };
		default:
			return state;
	}
}