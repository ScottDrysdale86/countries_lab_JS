import React from "react";
import FavCountry from "./FavCountry";

const FavList = ({ favCountries }) => {
	const FavCountries = favCountries.map((country, index) => {
		return <FavCountry country={country} key={index} />;
	});

	return (
		<div className="country-list">
			<ul>{FavCountries}</ul>
		</div>
	);
};

export default FavList;
