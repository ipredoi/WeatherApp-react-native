import { useState, useEffect } from 'react';
//import { API_KEY } from 'react-native-dotenv';
import useGeoLocation from './useGeolocation';

function useWeatherData(lat, long) {
	const [weather, setWeather] = useState(null);
	const coordinates = useGeoLocation();

	useEffect(() => {
		if (coordinates) {
			fetchData(...coordinates);
		}
	}, [coordinates]);

	async function fetchData(lat, long) {
		try {
			const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=363c1f1f0b4fcb3f61d80932d780aa3e`;

			const response = await fetch(url);
			const data = await response.json();
			console.log('is working');
			setWeather(data);
		} catch (err) {
			console.log('Unable to fetch');
		}
	}

	return weather;
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
