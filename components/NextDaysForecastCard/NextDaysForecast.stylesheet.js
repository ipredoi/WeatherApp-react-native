import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		height: 100,
		borderBottomColor: 'white',
		borderBottomWidth: 0.2,
		borderTopColor: 'white',
		borderTopWidth: 0.2,
		backgroundColor: 'red',
	},

	icon: {
		width: 50,
		height: 50,
	},
	precipitation: {
		fontSize: 15,
		color: 'white',
	},
	card: { flexDirection: 'row' },
});
