import React from "react";

const FavCountry = ({ country }) => {
	return <li>{country.name.common}</li>;
};

export default FavCountry;
