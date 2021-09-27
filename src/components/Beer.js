import { React, Component } from "react";

export default class Beer extends Component {
	render() {
		// Those expressions were getting kinda long, so I destructurized some of props
		const { mash_temp, fermentation, twist } = this.props.method;
		const { malt, hops, yeast } = this.props.ingredients;

		return (
			<div className="beerContainer">
				<img src={this.props.image_url} alt="Oops, looks like it couldn't load" />
				<div className="textInfo">
					<div className="beerNameAndTagline">
						<h1>{this.props.name}</h1>
						<sup>{this.props.tagline}</sup>
					</div>
					<p>
						First brewed on {this.props.first_brewed}. {this.props.description}
					</p>
					<p>Alcohol by volume: {this.props.abv}%</p>
					<p>International bitterness units: {this.props.ibu}</p>
					<p>Final gravity: {this.props.target_fg}</p>
					<p>Original gravity: {this.props.target_og}</p>
					<p>Color units (EBC): {this.props.ebc}</p>
					<p>Color units (SRM): {this.props.srm}</p>
					<p>pH: {this.props.ph}</p>
					<p>Attenuation: {this.props.attenuation_level}</p>
					<p>
						Boil volume: {this.props.boil_volume.value} {this.props.boil_volume.unit}
					</p>
					<p>
						Volume: {this.props.volume.value} {this.props.volume.unit}
					</p>
					{mash_temp[0].duration ? (
						<p>
							Mashed at {mash_temp[0].temp.value} degrees {mash_temp[0].temp.unit} for{" "}
							{mash_temp[0].duration} minutes
						</p>
					) : null}
					<p>
						Fermented at {fermentation.temp.value} degrees {fermentation.temp.unit}
					</p>
					{twist ? <p>A little twist: {twist}</p> : null}
					<h2>How it's made:</h2>
					<h3>Malt:</h3>
					{malt.map((ingredient) => (
						<p key={ingredient.name}>
							{ingredient.name} — {ingredient.amount.value} {ingredient.amount.unit}
						</p>
					))}
					<h3>Hops:</h3>
					{hops.filter((hops) => hops.add === "start").length > 0 ? (
						<b>At the start add:</b>
					) : null}
					{hops
						.filter((ingredient) => ingredient.add === "start")
						.map((ingredient) => (
							<p key={ingredient.name}>
								{ingredient.amount.value} {ingredient.amount.unit} of{" "}
								{ingredient.name} for {ingredient.attribute}
							</p>
						))}
					{hops.filter((ingredient) => ingredient.add === "middle").length > 0 ? (
						<b>Halfway through add:</b>
					) : null}
					{hops
						.filter((ingredient) => ingredient.add === "middle")
						.map((ingredient) => (
							<p key={ingredient.name}>
								{ingredient.amount.value} {ingredient.amount.unit} of{" "}
								{ingredient.name} for {ingredient.attribute}
							</p>
						))}
					{hops.filter((ingredient) => ingredient.add === "end").length > 0 ? (
						<b>In the end add:</b>
					) : null}
					{hops
						.filter((ingredient) => ingredient.add === "end")
						.map((ingredient) => (
							<p key={ingredient.name}>
								{ingredient.amount.value} {ingredient.amount.unit} of{" "}
								{ingredient.name} for {ingredient.attribute}
							</p>
						))}
					<h3>Yeast:</h3>
					<p>{yeast}</p>
					<h2>Best served with:</h2>
					<ul>
						{this.props.food_pairing.map((food, index) => (
							<li key={index}>{food}</li>
						))}
					</ul>
					<h2>Tip:</h2>
					<p>{this.props.brewers_tips}</p>
				</div>
			</div>
		);
	}
}
