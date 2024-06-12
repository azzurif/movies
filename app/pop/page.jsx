"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			const jsn = await res.json();
			setTodo(jsn);
		};

		fetchData();
	}, []);

	return (
		<div className="text-center text-gray-200 min-h-screen w-screen">
			wio wio wio HELLO WORLD
			{todo.map((data) => (
				<p key={data.id}>{data.title}</p>
			))}
		</div>
	);
};

export default Page;
