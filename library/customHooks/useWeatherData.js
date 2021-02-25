import { useState, useEffect } from 'react';
//import { API_KEY } from 'react-native-dotenv';
import useGeoLocation from './useGeolocation';

function useWeatherData(lat, long) {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState(null);
	const coordinates = useGeoLocation();

	useEffect(() => {
		if (coordinates) {
			fetchWeatherData(...coordinates);
			fetchCityData(...coordinates);
		}
	}, [coordinates]);

	async function fetchWeatherData(lat, long) {
		try {
			const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely&appid=363c1f1f0b4fcb3f61d80932d780aa3e`;

			//	onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

			const response = await fetch(url);
			const data = await response.json();
			console.log('is working');
			setWeather(data);
		} catch (err) {
			console.log('Unable to fetch weahter');
		}
	}

	async function fetchCityData(lat, long) {
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=363c1f1f0b4fcb3f61d80932d780aa3e`;

			//	onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

			const response = await fetch(url);
			const cityData = await response.json();
			//	console.log('is working');
			setCity({ name: cityData.name, country: cityData.sys.country });
		} catch (err) {
			console.log('Unable to fetch city');
		}
	}

	return { weather, city };
}

export default useWeatherData;

// filter data function

/* function filterData(object) {
	return {
		city_id: object.city.id,
		city: object.city.name,
		country: object.city.country,
		timezone: object.city.timezone,
		coord: {
			lat: object.city.coord.lat,
			lon: object.city.coord.lon,
		},
		list: object.list,
	};
}
 */
