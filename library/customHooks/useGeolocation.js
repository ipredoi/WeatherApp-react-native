import { useState, useEffect } from 'react';

function useGeolocation(lat, lon) {
	const [coordinates, setCoordinates] = useState(null);
	console.log(coordinates);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCoordinates([position.coords.latitude, position.coords.longitude]);
			},
			(err) => {
				console.log(err);
			}
		);
	}, []);

	return coordinates;
}

export default useGeolocation;
