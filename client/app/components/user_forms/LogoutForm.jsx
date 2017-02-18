import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/Authentication_Index.jsx';

export var LogoutForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		const {dispatch} = this.props;

		dispatch(actions.logoutUser());
	},
	render: function() {
		return (
			<div className="row">
				<div className="col-md-1">
					<form onSubmit={this.onFormSubmit}>
						<button className="btn-danger">Logout</button>
					</form>
				</div>
			</div>
		);
	}
})


export default connect()(LogoutForm);