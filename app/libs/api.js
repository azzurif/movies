const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRIVATE_KEY}`,
	},
};

export const getMovies = async (endpoint) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
		options
	);
	const res = await data.json();

	return res;
};
