import React from 'react';
import {
	View,
	Text,
	ActivityIndicator,
	ImageBackground,
	StatusBar,
	StyleSheet,
} from 'react-native';

let background = require('../../assets/images/loading.jpg');

export default function Loading() {
	return (
		<ImageBackground source={background} style={styles.background}>
			<StatusBar barStyle='light-content' />
			<View style={styles.container}>
				<Text style={textStyles.header}>Hello</Text>
				<ActivityIndicator
					style={styles.loadingImg}
					size='large'
					color='white'
				/>
				<Text style={textStyles.description}>Loading...</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
	loadingImg: {
		top: 250,
		marginBottom: 20,
	},
	background: {
		flex: 1,
	},
});

const textStyles = StyleSheet.create({
	header: {
		bottom: 50,
		fontSize: 35,
		fontWeight: '300',
		color: 'white',
	},

	description: {
		top: 250,
		fontSize: 18,
		fontWeight: '200',
		color: 'white',
	},
});
