import React, { useState } from "react";

export default function SignupWindow({ visibility, close }) {
	const [name, setName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = ({ target }) => {
		switch (target.name) {
			case "name":
				setName(target.value);
				return;
			case "birthDate":
				setBirthDate(target.value);
				return;
			case "email":
				setEmail(target.value);
				return;
			case "password":
				setPassword(target.value);
				return;
			default:
				return;
		}
	};

	const handleClick = ({ target }) => {
		if (target.className === "signupBackground") {
			close();
		}
	};

	return (
		<div className="signupBackground" style={{ visibility }} onClick={handleClick}>
			<form className="modalWindow">
				<h1>Sign up</h1>
				<label htmlFor="name">Name</label>
				<input
					required
					type="text"
					name="name"
					placeholder="Name, surname and middle name (if present)"
					value={name}
					onChange={handleChange}
				/>
				<label htmlFor="birthDate">Birth date</label>
				<input
					required
					type="date"
					name="birthDate"
					value={birthDate}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					required
					type="email"
					name="email"
					placeholder="Your email"
					pattern="\w{5,}@[a-zA-Z]{3,}[.][a-zA-Z]{2,}"
					value={email}
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					required
					type="password"
					minLength="6"
					name="password"
					placeholder="Your password"
					value={password}
					onChange={handleChange}
				/>
				<input type="submit" />
			</form>
		</div>
	);
}
