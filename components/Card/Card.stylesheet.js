import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
		height: 100,
	},
	loadingImg: {
		top: 250,
		marginBottom: 20,
	},
	background: {
		flex: 1,
	},
	icon: {
		width: 50,
		height: 50,
	},
	smallText: {
		fontSize: 15,
		fontWeight: '200',
		color: 'white',
	},
});
