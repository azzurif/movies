const Detail = async () => {
	return (
		<div className="flex flex-col gap-6 w-full max-h-screen">
			<div className="flex flex-col md:flex-row gap-6">
				<p className="skeleton h-10 w-1/2 mx-auto md:hidden"></p>
				<div className="skeleton h-72 md:h-80 w-1/2 md:w-1/3 mx-auto"></div>
				<div className="flex flex-col gap-6 w-full">
					<p className="skeleton w-60 h-12 hidden md:block"></p>
					<p className="skeleton w-full h-36"></p>
				</div>
			</div>
			<div className="skeleton h-10 w-28 hidden md:block"></div>
			<div className="skeleton h-36 w-full hidden md:block"></div>
		</div>
	);
};

export default Detail;
