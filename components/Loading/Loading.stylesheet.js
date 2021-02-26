import { StyleSheet, Dimensions } from 'react-native';

console.log(Dimensions.get('screen'));
export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	loadingImg: {
		top: 25g,
		marginBottom: 20,
	},
	background: {
		flex: 1,
		//resizeMode: 'cover',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export const textStyles = StyleSheet.create({
	header: {
		top: 100,
		fontSize: 35,
		fontWeight: '300',
		color: 'white',
	},

	description: {
		bottom: 100,
		fontSize: 18,
		fontWeight: '200',
		color: 'white',
	},
});
