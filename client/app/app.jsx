import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
var store = require('./store/ConfigureStore')

ReactDOM.render(
	<Provider store={store.configure()}>
    	<Router history={browserHistory}>{routes}</Router>
    </Provider>,
  document.getElementById('app')
);