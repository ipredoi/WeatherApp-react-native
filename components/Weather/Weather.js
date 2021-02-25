import React from 'react';
import { isSameDay, format } from 'date-fns';
import imageDictionary from '../../library/images/imageDictionary';
import Card from '../Card/Card';
import {
	Container,
	CurrentDay,
	City,
	BigText,
	BigIcon,
	Temp,
	Description,
	NextHours,
} from '../../components/Styles/Styles.js';
import convertTime from '../../library/functions/convertTime';

const Weather = ({ weather, city }) => {
	console.log(weather);
	//	console.log(city);
	// local timezone

	const locationTimezone = weather.timezone_offset * 1000;

	// get the current weather for the current day

	//	console.log(weather.daily[0].dt);

	const todayData = weather.daily.filter((object) => {
		const now = new Date().getTime() + locationTimezone;
		const currentDate = new Date(object.dt * 1000 + locationTimezone);
		return isSameDay(now, currentDate);
	});
	//	console.log(todayData);
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
	const nextHoursForecast = weather.hourly.map((hour) => {
		const dt = new Date(hour.dt * 1000 + locationTimezone);
		return {
			date: dt,
			hour: dt.getHours(),
			//hourName: format(dt, 'EEEE'),
			temp: `${Math.round(hour.temp)}°`,
			icon: imageDictionary[hour.weather[0].icon] || imageDictionary['02d'],
		};
	});

	//console.log(nextHoursForecast);

	// include Now in the title for the current weather
	let nextDaysForecastArr = [
		...nextHoursForecast.slice(0, 1),
		Object.assign({}, nextHoursForecast[0], { hour: 'Now' }),
		...nextHoursForecast.slice(1),
	].slice(0 + 1);

	console.log(nextDaysForecastArr.slice(0, 25));
	/*

	const sunRiseSunset = [
		{
			date: new Date(weather.city.sunrise * 1000 + locationTimezone),
			hour: convertTime(
				new Date(weather.city.sunrise * 1000 + locationTimezone)
			),
			temp: 'Sunrise',
			icon: imageDictionary.sunrise,
		},
		{
			date: new Date(weather.city.sunset * 1000 + locationTimezone),
			hour: convertTime(
				new Date(weather.city.sunset * 1000 + locationTimezone)
			),
			temp: 'Sunset',
			icon: imageDictionary.sunset,
		},
	];
 */
	//console.log({ nextDaysForecastArr });
	return (
		weather && (
			<Container>
				<CurrentDay>
					<City>
						{city.name}, {city.country}
					</City>
					<Description>{currentWeather.description}</Description>
					<Temp>{currentWeather.temp}°</Temp>
					<Description>
						H:{currentWeather.max}° L:{currentWeather.min}°{' '}
					</Description>
				</CurrentDay>
				<NextHours horizontal={true} showsHorizontalScrollIndicator={false}>
					{nextDaysForecastArr.slice(0, 25).map((hourly, index) => (
						<Card
							key={index}
							// dayName={day.dayName.substring(0, 3)}
							hour={hourly.hour}
							temp={hourly.temp}
							icon={hourly.icon}
						/>
					))}
				</NextHours>
			</Container>
		)
	);
};
export default Weather;
