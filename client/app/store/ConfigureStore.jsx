import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import * as auth_reducers from './../reducers/Authentication_Reducers'; 
import * as user_reducers from './../reducers/User_Home_Reducers';

export var configure = (initialState = {}) => {
	var reducers = combineReducers({
		createAccount: auth_reducers.createAccountReducer,
		login: auth_reducers.loginReducer,
		logout: auth_reducers.logoutReducer,
		userHome: user_reducers.userHomeReducer
	});

	const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
	const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

	return store;
}