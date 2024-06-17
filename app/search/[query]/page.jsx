"use client";
import React, { useEffect, useState } from "react";
import CardList from "@/app/components/cardList";
import Header from "@/app/components/header";
import { getMovies } from "@/app/libs/api";
import Card from "@/app/components/skeleton/card";

const Page = ({ params: { query } }) => {
	const [search, setSearch] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const searchQuery = await getMovies(`search/multi?query=${query}`);
			setSearch(searchQuery);
			setLoading(false);
		};

		fetchData();
	}, [query]);

	return (
		<div className="w-full">
			<title>{`Search for ${query}`}</title>
			<Header title={`Result for: ${query}`} />
			{loading ? <Card /> : <CardList data={search} />}
		</div>
	);
};

export default Page;
