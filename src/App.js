import "./App.css";
import { React, Component } from "react";
import Beer from "./components/Beer";
import SignupWindow from "./components/SignupWindow";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			dataToShow: [],
			isSigningUp: "hidden",
			searchQuery: "",
			sortValue: "none",
		};
	}

	componentDidMount() {
		fetch("https://api.punkapi.com/v2/beers")
			.then((res) => res.json())
			.then((data) => this.setState({ data, dataToShow: data }));
	}

	handleSortBy({ target: { value } }) {
		this.setState({
			sortValue: value,
			dataToShow: this.state.dataToShow.sort((a, b) => {
				if (value === "none") {
					this.setState({ dataToShow: this.state.data });
				}
				if (value.startsWith("mash")) {
					const comparableA = a.method["mash_temp"][0];
					const comparableB = b.method["mash_temp"][0];
					switch (value) {
						case "mash_temp":
							if (comparableA.temp.value < comparableB.temp.value) return -1;
							if (comparableA.temp.value > comparableB.temp.value) return 1;
							return 0;
						case "mash_duration":
							if (comparableA.duration < comparableB.duration) return -1;
							if (comparableA.duration > comparableB.duration) return 1;
							return 0;
						default:
							return 0;
					}
				}
				if (value.includes("volume")) {
					if (a[value].value < b[value].value) return -1;
					if (a[value].value > b[value].value) return 1;
					return 0;
				}
				if (value.includes("fermentation")) {
					if (a.method[value].temp.value < b.method[value].temp.value) return -1;
					if (a.method[value].temp.value > b.method[value].temp.value) return 1;
					return 0;
				}
				if (a[value] < b[value]) return -1;
				if (a[value] > b[value]) return 1;
				return 0;
			}),
		});
	}

	handleSearch({ target: { value } }) {
		this.setState({
			searchQuery: value,
			dataToShow: this.state.data.filter((beer) => {
				return beer.name.toLowerCase().includes(value.toLowerCase());
			}),
		});
	}

	showSignupWindow = () => {
		this.setState({ isSigningUp: "visible" });
	};

	hideSignupWindow = () => {
		this.setState({ isSigningUp: "hidden" });
	};

	render() {
		return (
			<div>
				<div className="navigation">
					<label htmlFor="sortBy">Sort by:</label>
					<select
						name="sortBy"
						value={this.state.sortValue}
						onChange={(e) => this.handleSortBy(e)}
					>
						<option key="none" value="none">
							—
						</option>
						<option key="name" value="name">
							Name
						</option>
						<option key="first_brewed" value="first_brewed">
							First brewed
						</option>
						<option key="abv" value="abv">
							Alcohol by volume
						</option>
						<option key="ibu" value="ibu">
							International bitterness units
						</option>
						<option key="target_fg" value="target_fg">
							Final gravity
						</option>
						<option key="target_og" value="target_og">
							Original gravity
						</option>
						<option key="ebc" value="ebc">
							Color units (EBC)
						</option>
						<option key="srm" value="srm">
							Color units (SRM)
						</option>
						<option key="ph" value="ph">
							pH
						</option>
						<option key="attenuation_level" value="attenuation_level">
							attenuation_level
						</option>
						<option key="boil_volume" value="boil_volume">
							Boil volume
						</option>
						<option key="volume" value="volume">
							Volume
						</option>
						<option key="mash_temp" value="mash_temp">
							Mashed, temperature
						</option>
						<option key="mash_duration" value="mash_duration">
							Mashed, duration
						</option>
						<option key="fermentation" value="fermentation">
							Fermentation temperature
						</option>
					</select>
					<label htmlFor="search">Search beer:</label>
					<input
						type="text"
						value={this.state.searchQuery}
						onChange={(e) => this.handleSearch(e)}
					></input>
					<button onClick={this.showSignupWindow}>Sign up</button>
				</div>
				<div className="beers">
					{this.state.dataToShow.map((beer) => (
						<Beer key={beer.id} {...beer} />
					))}
				</div>
				<SignupWindow visibility={this.state.isSigningUp} close={this.hideSignupWindow} />
			</div>
		);
	}
}
