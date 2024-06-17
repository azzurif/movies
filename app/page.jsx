"use client";
import React, { useEffect, useState } from "react";
import { getMovies } from "./libs/api";
import Header from "./components/header";
import CardList from "./components/cardList";
import Card from "./components/skeleton/card";

const Page = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMovies("trending/all/day");
			setMovies(res);
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<div className="text-center text-gray-200 w-full">
			<Header title="Popular" />
			{loading ? <Card /> : <CardList data={movies} />}
		</div>
	);
};

export default Page;
