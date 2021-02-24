import React from 'react';
import imageDictionary from '../../library/images/imageDictionary';
import { Container, BigText, BigIcon, Description } from '../Styles/Styles.js';

export default function Loading(props) {
	return (
		<Container>
			<BigText>Hello</BigText>
			<BigIcon source={imageDictionary['01d']} />
			<Description>Loading...</Description>
		</Container>
	);
}
