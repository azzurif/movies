const Card = async () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
			<p className="skeleton w-auto h-64"></p>
			<p className="skeleton w-auto h-64"></p>
			<p className="skeleton w-auto h-64 md:block hidden"></p>
			<p className="skeleton w-auto h-64 md:block hidden"></p>
			<p className="skeleton w-auto h-64 md:block hidden"></p>
		</div>
	);
};

export default Card;
