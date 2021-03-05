import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function UvIndex({ weather }) {
	const [uviText, setUviText] = useState(null);

	console.log(uviText);
	console.log(weather.current);
	let uvi = Math.round(weather.current.uvi);
	console.log(uvi);
	let windowWidth = Dimensions.get('window').width;
	let barPadding = 15;
	let barWidth = windowWidth - 2 * barPadding;
	let barHeight = 20;
	let circleDia = 16;
	let circleBorderRadius = circleDia / 2;

	let circlePositionLeft =
		(barWidth / 11 - circleDia) / 2 + (uvi - 1) * (barWidth / 11);

	//console.log(windowWidth);
	let uviLegend = [
		{
			text: 'Low',
			color: '#33cc00',
			description:
				'Wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen. Bright surfaces, sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'Low',
			color: '#33cc00',
			description:
				'Wear sunglasses on bright days. If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen. Bright surfaces, sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'Moderate',
			color: '#ffd11a',
			description:
				'Stay in shade near midday when the Sun is strongest. If outdoors, wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'Moderate',
			color: '#ffd11a',
			description:
				'Stay in shade near midday when the Sun is strongest. If outdoors, wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'Moderate',
			color: '#ffd11a',
			description:
				'Stay in shade near midday when the Sun is strongest. If outdoors, wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'Moderate',
			color: '#ff9933',
			description:
				'Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'High',
			color: '#ff9933',
			description:
				'Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'High',
			color: '#ff1a66',
			description:
				'Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'High',
			color: '#ff1a66',
			description:
				'Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'High',
			color: '#ff1a66',
			description:
				'Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
		{
			text: 'Extreme',
			color: '#9966ff',
			description:
				'Try to avoid sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.',
		},
	];

	useEffect(() => {
		function uviTextUpdate(value) {
			let text = {
				uviLevel: `${value} - ${uviLegend[uvi - 1].text}`,
				uivDescription: `${value}- ${uviLegend[uvi - 1].description}`,
			};
			setUviText(text);
		}
		uviTextUpdate(uvi);
	}, [uvi]);

	//circle dims

	return (
		<View
			style={[styles.container, { width: windowWidth, padding: barPadding }]}
		>
			<Text
				style={{
					fontSize: 10,
					color: 'white',
					paddingBottom: 5,
				}}
			>
				AIR POLLUTION
			</Text>
			<Text
				style={{
					fontSize: 25,
					color: 'white',
					fontWeight: '500',
					paddingBottom: 2,
				}}
			>
				text
			</Text>
			<View>
				<View
					style={[
						styles.bar,
						{ height: barHeight, borderRadius: barHeight / 2 },
					]}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: uviLegend[0].color,
							borderTopLeftRadius: barHeight / 2,
							borderBottomLeftRadius: barHeight / 2,
						}}
					/>
					{uviLegend.slice(1, -1).map((el, index) => {
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
							backgroundColor: uviLegend[uviLegend.length - 1].color,
							borderTopRightRadius: barHeight / 2,
							borderBottomRightRadius: barHeight / 2,
						}}
					/>
				</View>
				<View
					style={[
						styles.circle,
						{
							width: circleDia,
							height: circleDia,
							borderRadius: circleBorderRadius,
							left: circlePositionLeft,
							bottom: (barHeight - circleBorderRadius / 2) / 2,
						},
					]}
				></View>
			</View>
			<Text
				style={{
					fontSize: 10,
					color: 'white',
					paddingBottom: 5,
				}}
			>
				AIR POLLUTION
			</Text>
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

		borderColor: 'white',
		borderWidth: 1,
	},
	circle: {
		backgroundColor: 'black',
		borderColor: 'white',
		borderWidth: 2,
	},
});
