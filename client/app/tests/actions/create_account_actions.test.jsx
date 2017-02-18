import expect from 'expect';
import * as actions from './../../actions/indexes/create_account_index';
import * as types from './../../actions/types/create_account_types';
import CreateAccountForm from './../../components/users/CreateAccountForm';
import CreateAccountPage from './../../components/pages/CreateAccountPage';

describe('Create Account components', ()=>{
	it('Create Account form should exist', () =>{
		expect(CreateAccountForm).toExist();
	});
	it('Create Account page should exist', () =>{
		expect(CreateAccountPage).toExist();
	});
})
describe('Create Account Actions', ()=>{
	it('Should generate create account form action', () => {
		const newUser = [{
			name: 'joeyjoey',
			username: 'johnnyjohn',
			password: 'aaaaaaaa',
			confirmPassword: 'aaaaaaaa'
		}];
		const action = {
			type: types.CREATE_USER,
			newUser
		}
		const res = actions.createAccountForm(newUser);

		expect(res).toEqual(action);
	});
	it('Should add information input to database', () => {
		const newUser = [{
			name: 'joeyjoey',
			username: 'johnnyjohn',
			password: 'aaaaaaaa',
			confirmPassword: 'aaaaaaaa'
		}];
		const action = {
			type: types.CREATE_USER,
			newUser
		}
		const res = actions.createAccountForm(newUser);

		
	})
});