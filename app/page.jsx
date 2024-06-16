"use client";
import React, { useEffect, useState } from "react";
import { getMovies } from "./libs/api";
import Header from "./components/header";
import CardList from "./components/cardList";

const Page = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getMovies("trending/all/day");
			setMovies(res);
		};

		fetchData();
	}, []);

	return (
		<div className="text-center text-gray-200 w-full">
			<Header title="Popular" />
			<CardList data={movies} />
		</div>
	);
};

export default Page;
