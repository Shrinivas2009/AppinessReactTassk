import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import './LoginForm.css';
import { withRouter } from 'react-router';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidUpdate() {
		console.log(this.props.isLoginSuccess);
		if (this.props.isLoginSuccess) this.props.history.push('/dashboard');
	}

	onSubmit(e) {
		console.log(e);
		e.preventDefault();
		let { email, password } = this.state;
		this.props.login(email, password);
		this.setState({
			email: '',
			password: '',
		});
		console.log(this.props.history);
		console.log(this.props.isLoginSuccess);
		if (this.props.isLoginSuccess) this.props.history.push('/dashboard');
		console.log(this.props.history);
	}

	render() {
		let { email, password } = this.state;
		let { isLoginPending, isLoginSuccess, loginError } = this.props;
		return (
			<form name="loginForm" onSubmit={this.onSubmit}>
				<h1>Login</h1>
				<div className="form-group-collection">
					<div className="form-group">
						<label>Username:</label>
						<input
							type="email"
							name="email"
							onChange={(e) => this.setState({ email: e.target.value })}
							value={email}
							placeholder="Enter Email"
						/>
					</div>

					<div className="form-group">
						<label>Password:</label>
						<input
							type="password"
							name="password"
							onChange={(e) => this.setState({ password: e.target.value })}
							value={password}
							placeholder="Enter Password"
						/>
					</div>
				</div>

				<input type="submit" value="Submit" />

				<div className="message">
					{isLoginPending && <div>Please wait...</div>}
					{isLoginSuccess && <div>Success</div>}
					{loginError && <div>{loginError.message}</div>}
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		isLoginPending: state.isLoginPending,
		isLoginSuccess: state.isLoginSuccess,
		loginError: state.loginError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(login(email, password)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
