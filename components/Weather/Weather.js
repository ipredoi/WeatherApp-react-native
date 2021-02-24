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
	Week,
} from '../../components/Styles/Styles.js';

const Weather = ({ weather }) => {
	//console.log(weather.list);
	const locationTimezone = weather.city.timezone * 1000;

	const currentWeather = weather.list.filter((object) => {
		const now = new Date().getTime() + locationTimezone;
		let diff = weather.city.timezone * 1000;
		//console.log({ diff });
		//console.log({ now });

		const currentDate = new Date(object.dt * 1000);
		return isSameDay(now, currentDate);
	});

	//console.log({ currentWeather });
	const daysByHour = weather.list.map((day) => {
		const dt = new Date(day.dt * 1000 + locationTimezone);
		return {
			date: dt,
			hour: dt.getHours(),
			dayName: format(dt, 'EEEE'),
			temp: Math.round(day.main.temp),
			icon: imageDictionary[day.weather[0].icon] || imageDictionary['02d'],
		};
	});
	console.log(daysByHour);
	return (
		currentWeather.length > 0 && (
			<Container>
				<CurrentDay>
					<City>{weather.city.name}</City>
					<Description>
						{currentWeather[0].weather[0].description.charAt(0).toUpperCase() +
							currentWeather[0].weather[0].description.slice(1)}
					</Description>
					<BigIcon
						source={
							imageDictionary[currentWeather[0].weather[0].icon] ||
							imageDictionary['02d']
						}
					/>
					<Temp>{Math.round(currentWeather[0].main.temp)}°C</Temp>
				</CurrentDay>
				<Week horizontal={true} showsHorizontalScrollIndicator={true}>
					{daysByHour.slice(0, 9).map((day, index) => (
						<Card
							key={index}
							dayName={day.dayName.substring(0, 3)}
							temp={day.temp}
							icon={day.icon}
							hour={day.hour}
						/>
					))}
				</Week>
			</Container>
		)
	);
};
export default Weather;
