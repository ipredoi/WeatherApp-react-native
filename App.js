import React from 'react';
import useWeather from './library/customHooks/useWeatherData';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';
import { styles } from './App.stylesheet';
import { View } from 'react-native';

export default function App() {
	const { weather, city } = useWeather();
	//	console.log(city);
	return (
		<View style={styles.container}>
			{!weather || !city ? (
				<Loading />
			) : (
				<Weather weather={weather} city={city} />
			)}
		</View>
	);
}
