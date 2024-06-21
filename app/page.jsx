import { getMovies } from "./libs/api";
import Header from "./components/header";
import CardList from "./components/cardList";
import Card from "./components/skeleton/card";
import { Suspense } from "react";
import Link from "next/link";

const Page = async () => {
	const trending = await getMovies("trending/all/day");

	return (
		<div className="text-center w-full">
			<div className="relative">
				<Header title="Trending" />
				<Link
					href="/discover/page/1?type=movie"
					className="link link-primary absolute end-0 bottom-0 pb-4 text-sm"
				>
					discover more
				</Link>
			</div>
			<Suspense fallback={<Card />}>
				<CardList data={trending} />
			</Suspense>
		</div>
	);
};

export default Page;
