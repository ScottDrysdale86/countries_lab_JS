import React, { useState } from "react";
import "./details.css";

const CountryDetails = ({ countries, selectedCountry, saveFavCountry }) => {
	const findNeighbours = () => {
		let neighbours = [];
		for (let country of countries) {
			if (country.borders) {
				for (let border of country.borders) {
					if (border === selectedCountry.cca3) {
						neighbours.push(country.name.common);
					}
				}
			}
		}
		return neighbours;
	};

	console.log(findNeighbours());

	return (
		<div className="country-details">
			<img src={selectedCountry.flags.png} alt="Country Flag" />
			<h3>
				<u>{selectedCountry.name.common}</u>
			</h3>
			<ul>
				<li>Continent: {selectedCountry.region}</li>
				<li>Population: {selectedCountry.population}</li>
				<li>Capital City: {selectedCountry.capital}</li>
				<li>Neighbouring Countries: {findNeighbours}</li>
			</ul>
			<button value={selectedCountry} onClick={saveFavCountry}>
				Add to Fav
			</button>
		</div>
	);
};

export default CountryDetails;
