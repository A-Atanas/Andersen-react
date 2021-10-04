import "./App.css";
import { React, useEffect, useState } from "react";
import Beer from "./components/Beer";
import SignupWindow from "./components/SignupWindow";
import PageNavigation from "./components/PageNavigation";

export default function App() {
	const [data, setData] = useState([]);
	const [dataToShow, setDataToShow] = useState([]);
	const [isSigningUp, setIsSigningUp] = useState("hidden");
	const [searchQuery, setSearchQuery] = useState("");
	const [sortValue, setSortValue] = useState("none");

	useEffect(() => {
		fetch("https://api.punkapi.com/v2/beers")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setDataToShow(data);
			});
	}, []);

	const handleSort = ({ target: { value } }) => {
		setSortValue(value);
		setDataToShow(
			dataToShow.sort((a, b) => {
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
			})
		);
	};

	const handleSearch = ({ target: { value } }) => {
		setSearchQuery(value);
		setDataToShow(
			data.filter((beer) => {
				return beer.name.toLowerCase().includes(value.toLowerCase());
			})
		);
	};

	const showSignupWindow = () => {
		setIsSigningUp("visible");
	};

	const hideSignupWindow = () => {
		setIsSigningUp("hidden");
	};

	return (
		<div>
			<PageNavigation
				signUp={showSignupWindow}
				handleSearch={handleSearch}
				handleSort={handleSort}
				sortValue={sortValue}
				searchQuery={searchQuery}
			/>
			<div className="beers">
				{dataToShow.map((beer) => (
					<Beer key={beer.id} {...beer} />
				))}
			</div>
			<SignupWindow visibility={isSigningUp} close={hideSignupWindow} />
		</div>
	);
}
