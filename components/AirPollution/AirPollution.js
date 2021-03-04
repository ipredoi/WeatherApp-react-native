import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function AirPollution({ airPollution }) {
	const [aqiText, setAquiText] = useState(null);

	let aqi = airPollution.main.aqi;
	let windowWidth = Dimensions.get('window').width;
	let barPadding = 15;
	console.log(windowWidth);
	let aqiLegend = [
		{ text: 'Low', color: '#00ff00', position: windowWidth / 10 },
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

	useEffect(() => {
		function aquiTextUpdate(value) {
			let text = `${value} - ${aqiLegend[value - 1].text}`;
			setAquiText(text);
		}
		aquiTextUpdate(aqi);
	}, [aqi]);

	//circle dims

	let circleWidth = 40;
	let circleBorderRadius = circleWidth / 2;

	let circlePosition = (windowWidth - barPadding * 2) / 10;

	return (
		<View
			style={[styles.container, { width: windowWidth, padding: barPadding }]}
		>
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
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
	},

	bar: {
		flexDirection: 'row',
		top: 10,
		height: 20,

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

		left: (345 / 10 - 20) / 2 + 34.5 * 3,
		borderColor: 'white',
		borderWidth: 3,
		shadowOpacity: 0,
	},
});

// (window.width - (padding*2) / 10 casute) - diam.cerc)/2+ (window.width- (padding*2)/10)* air index
