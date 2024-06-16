"use client";
import React, { useEffect, useState } from "react";
import CardList from "@/app/components/cardList";
import Header from "@/app/components/header";
import { getMovies } from "@/app/libs/api";

const Page = ({ params: { query } }) => {
	const [search, setSearch] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const searchQuery = await getMovies(`search/multi?query=${query}`);
			setSearch(searchQuery);
		};

		fetchData();
	}, [query]);

	return (
		<div className="w-full">
			<title>{`Search for ${query}`}</title>
			<Header title={`Result for: ${query}`} />
			<CardList data={search} />
		</div>
	);
};

export default Page;
