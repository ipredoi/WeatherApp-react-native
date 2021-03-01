import { StyleSheet, StatusBar } from 'react-native';

console.log('statusBarHeight: ', StatusBar.currentHeight);
export const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	container: {
		flex: 1,
		top: 30,
		alignContent: 'center',
		justifyContent: 'center',
	},
	currentDayContainer: {
		top: 70,
		alignSelf: 'center',
	},
	city: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: '300',
		color: 'white',
	},

	nowWeatherDescription: {
		textAlign: 'center',
		fontSize: 18,

		color: 'white',
	},
	currentTemp: {
		textAlign: 'center',
		fontSize: 80,
		fontWeight: '100',
		color: 'white',
	},
	nextHoursForecast: {
		top: 100,
	},
});
