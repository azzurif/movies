const GetSlug = (title, id) => {
	return `${title
		?.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")}-${id}`;
};

export default GetSlug;
