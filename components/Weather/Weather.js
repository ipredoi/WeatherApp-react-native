import React from 'react';
import { isSameDay, format } from 'date-fns';
import imageDictionary from '../../library/images/imageDictionary';
import NextHoursForecastCard from '../NextHoursForecastCard/NextHoursForecastCard';
import CurrentWeatherCard from '../CurrentWeather/CurrentWeatherCard';
import convertTime from '../../library/functions/convertTime';

import { ImageBackground, StatusBar, View } from 'react-native';

import { styles } from './Weather.stylesheet';

let background = require('../../assets/images/loading.jpg');

const Weather = ({ weather, city }) => {
	// const locationTimezone = weather.timezone_offset * 1000;

	// const todayData = weather.daily.filter((object) => {
	// 	const now = new Date().getTime() + locationTimezone;
	// 	const currentDate = new Date(object.dt * 1000 + locationTimezone);
	// 	return isSameDay(now, currentDate);
	// });

	//console.log({ currentWeather });

	//	console.log(todayData);
	/* let weatherDescription = currentWeather.weather[0].description;
	console.log(weatherDescription); */
	/* let currentWeatherIcon =
		imageDictionary[currentWeather[0].weather[0].icon] ||
		imageDictionary['02d']; */

	// let currentTemp = Math.round(currentWeather[0].main.temp);

	// let cityInfo = weather.city;

	// array with next hours forecast

	//console.log(nextHoursForecast);

	// include Now in the title for the current weather
	// let nextHoursForecastArr = [
	// 	...nextHoursForecast.slice(0, 1),
	// 	Object.assign({}, nextHoursForecast[0], { hour: 'Now' }),
	// 	...nextHoursForecast.slice(1),
	// ].slice(0 + 1);

	// console.log(nextHoursForecastArr.slice(0, 25));
	// /*

	// const sunRiseSunset = [
	// 	{
	// 		date: new Date(weather.city.sunrise * 1000 + locationTimezone),
	// 		hour: convertTime(
	// 			new Date(weather.city.sunrise * 1000 + locationTimezone)
	// 		),
	// 		temp: 'Sunrise',
	// 		icon: imageDictionary.sunrise,
	// 	},
	// 	{
	// 		date: new Date(weather.city.sunset * 1000 + locationTimezone),
	// 		hour: convertTime(
	// 			new Date(weather.city.sunset * 1000 + locationTimezone)
	// 		),
	// 		temp: 'Sunset',
	// 		icon: imageDictionary.sunset,
	// 	},
	// ];

	//console.log({ nextHoursForecastArr });
	return (
		weather && (
			<ImageBackground source={background} style={styles.background}>
				<StatusBar barStyle='light-content' />
				<View style={styles.overlay}>
					<View style={styles.container}>
						<CurrentWeatherCard weather={weather} city={city} />
						<NextHoursForecastCard
							weather={weather}
							style={styles.nextHoursForecast}
						/>
					</View>
				</View>
			</ImageBackground>
		)
	);
};
export default Weather;
