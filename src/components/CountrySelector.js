import React from "react";

const CountrySelector = ({ countries, onCountrySelected }) => {
	const handleChange = function (event) {
		const chosenCountry = countries[event.target.value];
		onCountrySelected(chosenCountry);
	};

	const countryOptions = countries.map((country, index) => {
		return (
			<option value={index} key={index}>
				{country.name.common}
			</option>
		);
	});

	return (
		<select defaultValue="" onChange={handleChange}>
			<option value="">Select a Country...</option>
			{countryOptions}
		</select>
	);
};

export default CountrySelector;
