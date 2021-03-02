import React from 'react';
import { Day, SmallIcon, SmallText } from '../Styles/Styles';
import imageDictionary from '../../library/images/imageDictionary';
import { styles } from './NextHoursForecastCard.stylesheet';

import { Image, View, Text, ScrollView } from 'react-native';

export default function NextHoursForecastCard({ weather }) {
	const locationTimezone = weather.timezone_offset * 1000;

	const nextHoursForecast = weather.hourly.map((hour) => {
		const dt = new Date(hour.dt * 1000 + locationTimezone);
		return {
			date: dt,
			hour: dt.getHours(),
			temp: `${Math.round(hour.temp)}°`,
			icon: imageDictionary[hour.weather[0].icon] || imageDictionary['02d'],
		};
	});

	// include Now in the title for the current weather
	let nextHoursForecastArr = [
		...nextHoursForecast.slice(0, 1),
		Object.assign({}, nextHoursForecast[0], { hour: 'Now' }),
		...nextHoursForecast.slice(1),
	].slice(0 + 1);

	return (
		<View style={styles.nextHoursForecast}>
			<ScrollView
				style={styles.nextHoursForecast}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{nextHoursForecastArr.slice(0, 25).map((hourly, index) => (
					<View key={index} style={styles.container}>
						<Text style={styles.smallText}>{hourly.hour}</Text>
						<Image style={styles.icon} source={hourly.icon} />
						<Text style={styles.smallText}>{hourly.temp}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
