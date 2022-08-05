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
		const results = neighbours.join(", ");
		return results;
	};

	return (
		<div className="country-details">
			<img src={selectedCountry.flags.png} alt="Country Flag" />
			<h3>
				<u>{selectedCountry.name.common}</u>
			</h3>
			<ul>
				<li>
					<b>Continent: </b> {selectedCountry.region}
				</li>
				<li>
					<b>Population:</b>{" "}
					{selectedCountry.population.toLocaleString()}
				</li>
				<li>
					<b>Capital City:</b> {selectedCountry.capital}
				</li>
				<li>
					<b>Neighbouring Countries:</b> {findNeighbours()}
				</li>
			</ul>
			<button value={selectedCountry} onClick={saveFavCountry}>
				Add to Fav
			</button>
		</div>
	);
};

export default CountryDetails;
