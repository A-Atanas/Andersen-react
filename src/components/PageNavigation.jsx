import React from "react";

export default function PageNavigation({
	signUp,
	handleSearch,
	handleSort,
	sortValue,
	searchQuery,
}) {
	return (
		<div className="navigation">
			<label htmlFor="sortBy">Sort by:</label>
			<select name="sortBy" value={sortValue} onChange={handleSort}>
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
					Attenuation level
				</option>
				<option key="boil_volume" value="boil_volume">
					Boil volume
				</option>
				<option key="volume" value="volume">
					Volume
				</option>
				<option key="mash_temp" value="mash_temp">
					Mashing temperature
				</option>
				<option key="mash_duration" value="mash_duration">
					Mashing duration
				</option>
				<option key="fermentation" value="fermentation">
					Fermentation temperature
				</option>
			</select>
			<label htmlFor="search">Search beer:</label>
			<input type="text" value={searchQuery} onChange={handleSearch}></input>
			<button onClick={signUp}>Sign up</button>
		</div>
	);
}
