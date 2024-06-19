import { getMovies } from "./libs/api";
import Header from "./components/header";
import CardList from "./components/cardList";
import Card from "./components/skeleton/card";
import { Suspense } from "react";

const Page = async () => {
	const trending = await getMovies("trending/all/day");

	return (
		<div className="text-center text-gray-200 w-full">
			<Header title="Popular" />
			<Suspense fallback={<Card />}>
				<CardList data={trending} />
			</Suspense>
		</div>
	);
};

export default Page;
