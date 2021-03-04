import React from 'react';
import { isSameDay, format } from 'date-fns';
import imageDictionary from '../../library/images/imageDictionary';
import NextHoursForecastCard from '../NextHoursForecastCard/NextHoursForecastCard';
import NextDaysForecastCard from '../NextDaysForecastCard/NextDaysForecast';
import CurrentWeatherCard from '../CurrentWeather/CurrentWeatherCard';
import convertTime from '../../library/functions/functions';
import DayDescription from '../DayDescription/DayDescription';
import AirPollution from '../AirPollution/AirPollution';
import {
	Text,
	ImageBackground,
	ScrollView,
	StatusBar,
	View,
	StyleSheet,
} from 'react-native';

//import { styles } from './Weather.stylesheet';

let background = require('../../assets/images/loading.jpg');

const Weather = ({ weather, city, airPollution }) => {
	console.log(weather.daily[0]);
	return (
		weather && (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					<CurrentWeatherCard
						weather={weather}
						city={city}
						style={{ height: 300 }}
					/>
					<NextHoursForecastCard weather={weather} />
					<NextDaysForecastCard
						weather={weather}
						style={styles.nextDaysForecast}
					/>
					<DayDescription weather={weather} />
					<AirPollution airPollution={airPollution} />
				</ScrollView>
			</View>
		)
	);
};
export default Weather;

const styles = StyleSheet.create({
	background: { flex: 1 },
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,30,0,0.1)',
	},
	container: {
		flex: 1,
		//	top: 30,
		alignContent: 'center',
		justifyContent: 'center',
		//backgroundColor: 'pink',
	},

	// nextHoursForecast: {
	// 	top: 200,
	// },
	// nextDaysForecast: {
	// 	//top: 300,
	// 	height: 40,
	// },
});
