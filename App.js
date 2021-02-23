import React, { useState, Component, useEffect } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

import ForecastCard from './components/ForecastCard/ForecastCard';

export default function App() {
	const [userLatitude, setUserLatitude] = useState(0);
	const [userLongitude, setUserLongitude] = useState(0);
	const [forecastData, setForecastData] = useState([]);
	const [error, setError] = useState('');
	console.log(userLatitude, userLongitude);
	console.log(forecastData);

	useEffect(() => {
		function getUserLocation() {
			navigator.geolocation.getCurrentPosition((position) => {
				console.log(position);
				setUserLatitude(position.coords.latitude);
				setUserLongitude(position.coords.longitude);
			});
		}
		getUserLocation();
	}, []);

	useEffect(() => {
		function getWeather() {
			let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${userLatitude}&lon=${userLongitude}&units=metric&appid=83a704c1778757bdc8cb1fcf767cb81b`;
			fetch(url)
				.then((response) => response.json())
				.then((data) => setForecastData(data));
		}
		getWeather();
	}, []);

	return (
		<FlatList
			data={forecastData}
			style={{ marginTop: 20 }}
			keyExtractor={(item) => item.dt_text}
			renderItem={({ item }) => (
				<ForecastCard detail={item} location={forecastData.city.name} />
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
