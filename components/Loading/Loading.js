import React from 'react';
import imageDictionary from '../../library/images/imageDictionary';

import { styles, textStyles } from './Loading.stylesheet';
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native';

const background = {
	uri:
		'https://i.pinimg.com/originals/bb/9b/26/bb9b26c7c4f5c8f0de8ab2046277f86d.jpg',
};

export default function Loading(props) {
	return (
		<View style={styles.container}>
			<ImageBackground source={background} style={styles.background}>
				<Text style={textStyles.header}>Hello</Text>
				<ActivityIndicator
					style={styles.loadingImg}
					size='large'
					color='white'
				/>
				<Text style={textStyles.description}>Loading...</Text>
			</ImageBackground>
		</View>
	);
}
