"use client";
import { useEffect, useState } from "react";

const Page = () => {
	const [todo, setTodo] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((data) => {
				setTodo(data);
				setLoading(false);
			});
	});

	return (
		<div className="flex flex-col gap-6">
			<p className="skeleton w-1/2 md:w-1/3 h-10 mx-auto"></p>
			<div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
				<p className="skeleton w-auto h-64"></p>
				<p className="skeleton w-auto h-64"></p>
				<p className="skeleton w-auto h-64 md:block hidden"></p>
				<p className="skeleton w-auto h-64 md:block hidden"></p>
				<p className="skeleton w-auto h-64 md:block hidden"></p>
			</div>
		</div>
	);
};

export default Page;
