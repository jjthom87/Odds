import expect from 'expect';
import * as actions from './../../actions/indexes/login_index';
import * as types from './../../actions/types/login_types';

describe('Login Actions', ()=>{
	it('should generate login form action', () => {
		const loginUser = [{
			username: 'johnnyjohn',
			password: 'aaaaaaaa'
		}];
		const action = {
			type: types.LOGIN_USER,
			loginUser
		}
		const res = actions.loginForm(loginUser);

		expect(res).toEqual(action);
	});
});