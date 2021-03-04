import { setMilliseconds } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AirPollution({ airPollution }) {
	console.log(airPollution);
	const [aqiText, setAquiText] = useState(null);
	//console.log(aqiText);
	let aqi = airPollution.main.aqi;

	let aqiLegend = [
		{ text: 'Low', color: '#00ff00' },
		{ text: 'Low', color: '#39e600' },
		{ text: 'Low', color: '#2db300' },
		{ text: 'Moderate', color: '#ffd11a' },
		{ text: 'Moderate', color: '#ff9933' },
		{ text: 'Moderate', color: '#ff751a' },
		{ text: 'High', color: '#ff3333' },
		{ text: 'High', color: '#800000' },
		{ text: 'High', color: '#4d1a00' },
		{ text: 'Very high', color: '#990099' },
	];
	console.log(styles.bar.width / 2);

	useEffect(() => {
		function aquiTextUpdate(value) {
			let text = `${value} - ${aqiLegend[value - 1].text}`;
			setAquiText(text);
		}
		aquiTextUpdate(aqi);
	}, [aqi]);

	return (
		<View style={styles.container}>
			<Text>AIR POLLUTION</Text>
			<Text>{aqiText}</Text>
			<View>
				<View style={styles.bar}>
					<View
						style={{
							flex: 1,
							backgroundColor: aqiLegend[0].color,
							borderTopLeftRadius: 10,
							borderBottomLeftRadius: 10,
						}}
					/>
					{aqiLegend.slice(1, -1).map((el, index) => {
						console.log(el.color);
						return (
							<View
								key={index}
								style={{
									flex: 1,
									backgroundColor: el.color,
								}}
							></View>
						);
					})}
					<View
						style={{
							flex: 1,
							backgroundColor: aqiLegend[aqiLegend.length - 1].color,
							borderTopRightRadius: 10,
							borderBottomRightRadius: 10,
						}}
					/>
				</View>
				<View style={styles.circle}></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		padding: 15,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
	},

	bar: {
		flexDirection: 'row',
		top: 10,
		height: 20,
		width: '100%',
		backgroundColor: 'white',
		borderColor: '#000',
		borderWidth: 0.2,
		borderRadius: 10,
	},
	circle: {
		width: 20,
		height: 20,
		borderRadius: 20 / 2,
		backgroundColor: 'blue',
		bottom: 10,
	},
});
