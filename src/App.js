import "./App.css";
import { React, Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	fetchData() {
		fetch("https://api.punkapi.com/v2/beers")
			.then((res) => res.json())
			.then((data) => this.setState({data}));
	}

	render() {
		return (
			<div className="App">
				<button
					onClick={() => this.fetchData()}
				>
					Eeeeeeee
				</button>
				<div>
					{this.state.data.map((beer) => (
						<div>{beer.name}</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
