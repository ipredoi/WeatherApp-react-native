import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		//	backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const textStyles = StyleSheet.create({
	header: {
		fontSize: 35,
		fontWeight: '300',
		color: 'white',
	},
});

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #272343;
	justify-content: center;
	width: 100%;
	align-items: center;
`;
export const CurrentDay = styled.View`
	position: absolute;
	top: 40px;
	flex: 1;
	margin-bottom: 5px;
	align-items: center;
`;

export const City = styled.Text`
	font-size: 30px;
	font-weight: 300;
	color: white;
	${'' /* padding-bottom: 20px; */}
`;
export const BigText = styled.Text`
	font-size: 35px;
	font-weight: 100;
	color: white;
	padding-bottom: 10px;
`;

export const BigIcon = styled.Image`
	width: 168px;
	height: 168px;
	padding-bottom: 40px;
`;

export const Temp = styled.Text`
	font-size: 80px;
	font-weight: 100;
	color: white;
`;
export const Description = styled.Text`
	font-size: 18px;
	font-weight: 200;
	color: white;
	${'' /* padding-top: 5px; */}
`;

export const NextHours = styled.ScrollView`
position: absolute;
	height: 150px

	border-top-color: white;
	border-top-width: 0.2px;
	border-bottom-color: white;
	border-bottom-width: 0.2px;
`;

export const Day = styled.View`
	height: 150px;
	width: 75px;
	justify-content: center;
	align-items: center;
`;

export const SmallIcon = styled.Image`
	width: 50px;
	height: 50px;
`;
export const SmallText = styled.Text`
	font-size: 20px;
	font-weight: 300;
	color: white;
`;
