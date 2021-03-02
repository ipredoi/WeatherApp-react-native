import React from 'react';
import { getWeekDay } from '../../library/functions/convertTime';
import imageDictionary from '../../library/images/imageDictionary';
import { styles } from './NextDaysForecast.stylesheet';

import { Image, View, Text, ScrollView } from 'react-native';

export default function NextDaysForecastCard({ weather }) {
	const locationTimezone = weather.timezone_offset * 1000;
	//console.log({ vremea: weather.daily });
	const nextDaysForecast = weather.daily.map((day) => {
		return {
			name: getWeekDay(day.dt),
			icon: imageDictionary[day.weather.icon] || imageDictionary['02d'],
			precipitation: `${day['pop'] * 100}%`,
			maxTemp: `${Math.round(day.temp.max)}°`,
			minTemp: `${Math.round(day.temp.min)}°`,
		};
	});

	const nextDaysForecastArr = nextDaysForecast.slice(1);
	console.log({ obiectulmeu: { nextDaysForecastArr } });

	return (
		<View style={styles.container}>
			{nextDaysForecastArr.map((day, index) => (
				<View style={styles.card} key={index}>
					<Text style={styles.dayName}>{day.name}</Text>
					<Image style={styles.icon} source={day.icon} />
					<Text style={styles.precipitation}>{day.precipitation}</Text>
					<Text style={styles.maxTemp}>{day.maxTemp}</Text>
					<Text styele={styles.minTemp}>{day.minTemp}</Text>
				</View>
			))}
		</View>
	);
}
