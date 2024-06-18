export const timeConvert = (num) => {
	const hours = Math.floor(num / 60);
	const minutes = num % 60;
	return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`;
};
