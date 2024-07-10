import { getMovies } from "./libs/api";
import Header from "./components/header";
import CardList from "./components/cardList";
import Link from "next/link";

const Page = async () => {
	const trending = await getMovies("trending/all/day");

	return (
		<div className="text-center w-full">
			<div className="relative">
				<Header title="Trending" />
				<Link
					href="/discover/page/1?type=movie"
					className="link link-primary absolute end-0 bottom-6 text-sm"
				>
					discover
				</Link>
			</div>
			<CardList data={trending} />
		</div>
	);
};

export default Page;
