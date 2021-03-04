// function that transforms epoch to hh:mm

export function convertTime(number) {
	return number.getHours() + ':' + number.getMinutes();
}

export function getWeekDay(number) {
	let weekDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	let dayOfWeek = weekDays[new Date(number * 1000).getDay()];

	return dayOfWeek;
}

export function roundRainPercentage(number) {
	let percentage = Math.round(number * 100);
	let roundToTen = Math.round(percentage / 10) * 10;
	return roundToTen;
}


