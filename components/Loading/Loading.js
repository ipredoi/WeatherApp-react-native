import React from 'react';

import { styles, textStyles } from './Loading.stylesheet';
import {
	View,
	Text,
	ActivityIndicator,
	ImageBackground,
	StatusBar,
} from 'react-native';

let background = require('../../assets/images/loading.jpg');

export default function Loading(props) {
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
