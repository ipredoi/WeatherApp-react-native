import React from 'react';
import { Day, SmallIcon, SmallText } from '../Styles/Styles';

import { styles } from './Card.stylesheet';

import { View, Text, Image } from 'react-native';

export default function Card({ dayName, icon, temp, hour }) {
	return (
		<View style={styles.container}>
			<Text style={styles.smallText}>{hour}</Text>
			<Image style={styles.icon} source={icon} />
			<Text style={styles.smallText}>{temp}</Text>
		</View>
	);
}
