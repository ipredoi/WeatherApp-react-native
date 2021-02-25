// function that transforms epoch to hh:mm

export default function convertTime(number) {
	return number.getHours() + ':' + number.getMinutes();
}
