const NotFound = () => {
	return (
		<>
			<title>Not found</title>
			<div className="grid h-screen place-content-center px-">
				<div className="text-center">
					<h1 className="text-9xl font-black">404</h1>

					<p className="text-2xl font-bold tracking-tight sm:text-4xl">
						Uh-oh!
					</p>

					<p className="mt-4">We can't find that page.</p>

					<a
						href="/"
						className="mt-6 inline-block rounded px-5 py-3 text-sm font-medium focus:outline-none focus:ring bg-primary text-white"
					>
						Go Back Home
					</a>
				</div>
			</div>
		</>
	);
};

export default NotFound;
