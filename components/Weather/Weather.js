import React from 'react';
import { isSameDay, format } from 'date-fns';
import backgroudDictionary from '../../library/images/backgroundDictionary';
import NextHoursForecastCard from '../NextHoursForecastCard/NextHoursForecastCard';
import NextDaysForecastCard from '../NextDaysForecastCard/NextDaysForecast';
import CurrentWeatherCard from '../CurrentWeather/CurrentWeatherCard';
import DayDescription from '../DayDescription/DayDescription';
import AirPollution from '../AirPollution/AirPollution';
import Sun from '../Sun/Sun';
import Humidity from '../Humidity/Humidity';
import Wind from '../Wind/wind';
import Precipitation from '../Pressure/Pressure';
import UvIndex from '../UvIndex/UvIndex';
import {
	ImageBackground,
	ScrollView,
	StatusBar,
	View,
	StyleSheet,
} from 'react-native';
import backgroundDictionary from '../../library/images/backgroundDictionary';

//import { styles } from './Weather.stylesheet';

const Weather = ({ weather, city, airPollution }) => {
	console.log(weather.current.weather.icon);
	let background = backgroudDictionary[weather.current.weather.icon];
	//console.log(weather.daily[0]);
	return (
		weather &&
		airPollution &&
		city && (
			<ImageBackground source={background} style={{ flex: 1 }}>
				<StatusBar barStyle='light-content' />
				<View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
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
							<Sun weather={weather} />
							<Humidity weather={weather} />
							<Wind weather={weather} />
							<Precipitation weather={weather} />
							<UvIndex weather={weather} />
						</ScrollView>
					</View>
				</View>
			</ImageBackground>
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
