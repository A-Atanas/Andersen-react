import React, { Component } from "react";

export default class SignupWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			birthDate: "",
			email: "",
			password: "",
		};
	}

	handleChange({ target }) {
		this.setState({ [target.name]: target.value });
	}

	handleClick({ target }) {
		if (target.className === "signupBackground") {
			this.props.close();
		}
	}

	render() {
		return (
			<div
				className="signupBackground"
				style={{ visibility: this.props.visibility }}
				onClick={(e) => this.handleClick(e)}
			>
				<form className="modalWindow">
					<h1>Sign up</h1>
					<label htmlFor="name">Name</label>
					<input
						required
						type="text"
						name="name"
						placeholder="Name, surname and middle name (if present)"
						value={this.state.name}
						onChange={(e) => this.handleChange(e)}
					/>
					<label htmlFor="birthDate">Birth date</label>
					<input
						required
						type="date"
						name="birthDate"
						value={this.state.birthDate}
						onChange={(e) => this.handleChange(e)}
					/>
					<label htmlFor="email">Email</label>
					<input
						required
						type="email"
						name="email"
						placeholder="Your email"
						pattern="\w{5,}@[a-zA-Z]{3,}[.][a-zA-Z]{2,}"
						value={this.state.email}
						onChange={(e) => this.handleChange(e)}
					/>
					<label htmlFor="password">Password</label>
					<input
						required
						type="password"
						minLength="6"
						name="password"
						placeholder="Your password"
						value={this.state.password}
						onChange={(e) => this.handleChange(e)}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}
