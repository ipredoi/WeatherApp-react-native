import React from 'react';
import useWeather from './library/customHooks/useWeatherData';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';

import { View, StyleSheet, ScrollView, Text } from 'react-native';

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
});
