import { StyleSheet, StatusBar } from 'react-native';

console.log('statusBarHeight: ', StatusBar.currentHeight);
export const styles = StyleSheet.create({
	background: { flex: 1 },
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,30,0,0.1)',
	},
	container: {
		flex: 1,
		top: 30,
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: 'blue',
	},

	nextHoursForecast: {
		top: 200,
	},
	nextDaysForecast: {
		top: 300,
		height: 40,
	},
});
