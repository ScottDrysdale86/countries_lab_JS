import React, { useEffect, useState } from "react";
import CountryDetails from "../components/CountryDetails";
import CountrySelector from "../components/CountrySelector";
import FavList from "../components/FavList";

const CountriesBox = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [favCountries, setFavCountries] = useState([]);

	useEffect(() => {
		getCountries();
	}, []);

	const getCountries = function () {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((countries) => setCountries(countries));
	};

	const onCountrySelected = function (country) {
		setSelectedCountry(country);
	};

	const totalPop = (countries) => {
		let total = 0;
		for (let country of countries) {
			total += country.population;
		}
		const result = total.toLocaleString();
		return result;
	};

	const saveFavCountry = () => {
		for (let country of favCountries) {
			if (country.name.common === selectedCountry.name.common) {
				return;
			}
		}
		const newFavs = [...favCountries, selectedCountry];
		setFavCountries(newFavs);
	};

	return (
		<>
			<h1>Countries of the World</h1>
			<p>
				<b>Total World Population:</b> {totalPop(countries)}
			</p>

			<h2>List of Countries</h2>
			<CountrySelector
				countries={countries}
				onCountrySelected={onCountrySelected}
			/>
			{selectedCountry ? (
				<CountryDetails
					countries={countries}
					selectedCountry={selectedCountry}
					saveFavCountry={saveFavCountry}
				/>
			) : null}
			<h2>Favourite Countries</h2>
			<FavList favCountries={favCountries} />
		</>
	);
};

export default CountriesBox;
