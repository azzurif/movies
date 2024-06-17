"use client";
import React, { useEffect, useState } from "react";
import CardList from "@/app/components/cardList";
import Header from "@/app/components/header";
import { getMovies } from "@/app/libs/api";
import Card from "@/app/components/skeleton/card";

const Page = ({ params: { keyword } }) => {
	const [search, setSearch] = useState([]);
	const [loading, setLoading] = useState(true);

	const decodedKeyword = decodeURI(keyword);

	useEffect(() => {
		const fetchData = async () => {
			const searchQuery = await getMovies(
				`search/multi?query=${decodedKeyword}`
			);
			setSearch(searchQuery);
			setLoading(false);
		};

		fetchData();
	}, [decodedKeyword]);

	return (
		<div className="w-full">
			<title>{`Search for ${decodedKeyword}`}</title>
			<Header title={`Result for: ${decodedKeyword}`} />
			{loading ? <Card /> : <CardList data={search} />}
		</div>
	);
};

export default Page;
