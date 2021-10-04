import { React } from "react";

export default function Beer({
	method: { mash_temp, fermentation, twist },
	ingredients: { malt, hops, yeast },
	image_url,
	name,
	tagline,
	first_brewed,
	description,
	abv,
	ibu,
	target_fg,
	target_og,
	ebc,
	srm,
	ph,
	attenuation_level,
	boil_volume,
	volume,
	food_pairing,
	brewers_tips,
}) {
	return (
		<div className="beerContainer">
			<img src={image_url} alt="Oops, looks like it couldn't load" />
			<div className="textInfo">
				<div className="beerNameAndTagline">
					<h1>{name}</h1>
					<sup>{tagline}</sup>
				</div>
				<p>
					First brewed on {first_brewed}. {description}
				</p>
				<p>Alcohol by volume: {abv}%</p>
				<p>International bitterness units: {ibu}</p>
				<p>Final gravity: {target_fg}</p>
				<p>Original gravity: {target_og}</p>
				<p>Color units (EBC): {ebc}</p>
				<p>Color units (SRM): {srm}</p>
				<p>pH: {ph}</p>
				<p>Attenuation: {attenuation_level}</p>
				<p>
					Boil volume: {boil_volume.value} {boil_volume.unit}
				</p>
				<p>
					Volume: {volume.value} {volume.unit}
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
							{ingredient.amount.value} {ingredient.amount.unit} of {ingredient.name}{" "}
							for {ingredient.attribute}
						</p>
					))}
				{hops.filter((ingredient) => ingredient.add === "middle").length > 0 ? (
					<b>Halfway through add:</b>
				) : null}
				{hops
					.filter((ingredient) => ingredient.add === "middle")
					.map((ingredient) => (
						<p key={ingredient.name}>
							{ingredient.amount.value} {ingredient.amount.unit} of {ingredient.name}{" "}
							for {ingredient.attribute}
						</p>
					))}
				{hops.filter((ingredient) => ingredient.add === "end").length > 0 ? (
					<b>In the end add:</b>
				) : null}
				{hops
					.filter((ingredient) => ingredient.add === "end")
					.map((ingredient) => (
						<p key={ingredient.name}>
							{ingredient.amount.value} {ingredient.amount.unit} of {ingredient.name}{" "}
							for {ingredient.attribute}
						</p>
					))}
				<h3>Yeast:</h3>
				<p>{yeast}</p>
				<h2>Best served with:</h2>
				<ul>
					{food_pairing.map((food, index) => (
						<li key={index}>{food}</li>
					))}
				</ul>
				<h2>Tip:</h2>
				<p>{brewers_tips}</p>
			</div>
		</div>
	);
}
