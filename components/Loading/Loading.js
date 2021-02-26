import React from 'react';
import imageDictionary from '../../library/images/imageDictionary';
import { Container, BigText, BigIcon, Description } from '../Styles/Styles.js';

import { styles, textStyles } from './Loading.stylesheet';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Loading(props) {
	return (
		<View style={styles.container}>
			<Text style={textStyles.header}>Hello</Text>
			<ActivityIndicator size='large' color='	white' />
			<Description>Loading...</Description>
		</View>
	);
}
