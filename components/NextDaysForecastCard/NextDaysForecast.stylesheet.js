import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		//	alignItems: 'center',
		flexDirection: 'column',
		height: 150,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
		borderTopColor: 'white',
		borderTopWidth: 0.2,
	},

	icon: {
		width: 40,
		height: 40,
		left: 40,
	},
	precipitation: {
		fontSize: 15,
		color: 'white',
	},
	card: {
		top: 20,
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-around',
		height: 50,
	},
	dayName: {
		fontSize: 15,
		color: 'white',
		left: 20,
	},
});
