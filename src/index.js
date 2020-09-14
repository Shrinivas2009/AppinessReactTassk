import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import browserHistory from './history';

ReactDOM.render(
	<BrowserRouter history={browserHistory} forceRefresh={true}>
		<Provider store={store}>
			<Switch>
				<Route path="/" component={LoginForm} exact strict />
				<Route path="/dashboard" component={Dashboard} exact strict />
			</Switch>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
