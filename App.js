import React from 'react';
import useWeather from './library/customHooks/useWeatherData';
import Loading from './components/Loading/Loading';
import Weather from './components/Weather/Weather';
import { Container } from './components/Styles/Styles';

export default function App() {
	const weather = useWeather();
	//console.log(weather);
	return (
		<Container>
			{!weather ? <Loading /> : <Weather weather={weather} />}
		</Container>
	);
}
