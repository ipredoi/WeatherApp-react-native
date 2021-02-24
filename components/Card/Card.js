import React from 'react';
import { Day, SmallIcon, SmallText } from '../Styles/Styles';

export default function Card({ dayName, icon, temp, hour }) {
	return (
		<Day>
			<SmallText>{dayName}</SmallText>
			<SmallIcon source={icon} />
			<SmallText>{temp}°C</SmallText>
			<SmallText>{hour}h</SmallText>
		</Day>
	);
}
