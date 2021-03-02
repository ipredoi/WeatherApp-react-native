import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

export const textStyles = StyleSheet.create({
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