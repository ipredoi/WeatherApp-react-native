import React from 'react';
import { isSameDay, format } from 'date-fns';
import { View, Text } from 'react-native';
import imageDictionary from '../../library/images/imageDictionary';
import { styles } from './CurrentWeatherCard.stylesheet';

function CurrentWeatherCard({ city, weather }) {
	// local timezone
	const locationTimezone = weather.timezone_offset * 1000;

	// get the current weather for the current day

	const todayData = weather.daily.filter((object) => {
		const now = new Date().getTime() + locationTimezone;
		const currentDate = new Date(object.dt * 1000 + locationTimezone);
		return isSameDay(now, currentDate);
	});

	const currentWeather = {
		city: city.name,
		country: city.country,
		description:
			weather.current.weather[0].description.charAt(0).toUpperCase() +
			weather.current.weather[0].description.slice(1),
		icon:
			imageDictionary[weather.current.weather.icon] || imageDictionary['02d'],
		min: Math.round(todayData[0].temp.min),
		max: Math.round(todayData[0].temp.max),
		temp: Math.round(weather.current.temp),
	};
	return (
		<View style={styles.currentDayContainer}>
			<Text style={styles.city}>
				{city.name}, {city.country}
			</Text>
			<Text style={styles.nowWeatherDescription}>
				{currentWeather.description}
			</Text>
			<Text style={styles.currentTemp}>{currentWeather.temp}°</Text>
			<Text style={styles.nowWeatherDescription}>
				H:{currentWeather.max}° L:{currentWeather.min}°
			</Text>
		</View>
	);
}

export default CurrentWeatherCard;
