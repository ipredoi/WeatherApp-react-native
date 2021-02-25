import React from 'react';
import { Day, SmallIcon, SmallText } from '../Styles/Styles';

export default function Card({ dayName, icon, temp, hour }) {
	return (
		<Day>
			{/* <SmallText>{dayName}</SmallText> */}
			<SmallText>{hour}</SmallText>
			<SmallIcon source={icon} />
			<SmallText>{temp}</SmallText>
		</Day>
	);
}
