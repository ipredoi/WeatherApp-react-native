import React, { useState } from 'react';
import {
	ImageBackground,
	ScrollView,
	StatusBar,
	View,
	StyleSheet,
	Animated,
	Text,
} from 'react-native';

const headerExpandedHeight = 300;
const headerColapsedHeight = 60;

export default function Play() {
	const [scrollY, setScrollY] = useState(new Animated.Value(0));

	const headerHeight = scrollY.interpolate({
		inputRange: [0, headerExpandedHeight],
		outputRange: [headerExpandedHeight, headerColapsedHeight],
		extrapolate: 'clamp',
	});

	const headerTitleOpacity = scrollY.interpolate({
		inputRange: [0, headerExpandedHeight],
		outputRange: [0, 1],
		extrapolate: 'clamp',
	});

	const heroTitleOpacity = scrollY.interpolate({
		inputRange: [0, headerExpandedHeight - headerColapsedHeight],
		outputRange: [1, 0],
		extrapolate: 'clamp',
	});

	return (
		<View style={styles.container}>
			<Animated.View style={{ height: headerHeight }} />
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				onScroll={Animated.event([
					{
						nativeEvent: {
							contentOffset: {
								y: scrollY,
							},
						},
					},
				])}
				scrollEventThrottle={16}
			>
				<Animated.Text
					style={{
						textAlign: 'center',
						marginTop: 28,
						opacity: headerTitleOpacity,
					}}
				>
					HEADER
				</Animated.Text>
				<Animated.Text
					style={{
						position: 'absolute',
						bottom: 16,
						left: 16,
						opacity: heroTitleOpacity,
					}}
				>
					HEADER
				</Animated.Text>
				<Text style={styles.content}>TEST Content</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContainer: {
		padding: 16,
		backgroundColor: 'pink',
	},
	title: {
		fontSize: 24,
		marginVertical: 16,
	},
});
