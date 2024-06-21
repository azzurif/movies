import CardList from "@/app/components/cardList";
import Header from "@/app/components/header";
import { getMovies } from "@/app/libs/api";
import Card from "@/app/components/skeleton/card";
import { Suspense } from "react";

const Page = async ({ params: { keyword } }) => {
	const decodedKeyword = decodeURI(keyword);

	const search = await getMovies(`search/multi?query=${decodedKeyword}`);

	return (
		<div className="w-full">
			<title>{`Search for ${decodedKeyword}`}</title>
			<Header title={`Result for: ${decodedKeyword}`} />
			<Suspense fallback={<Card />}>
				<CardList data={search} />
			</Suspense>
		</div>
	);
};

export default Page;
