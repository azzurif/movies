import CardList from "@/app/components/cardList";
import Header from "@/app/components/header";
import { getMovies } from "@/app/libs/api";

const Page = async ({ params: { keyword } }) => {
	const decodedKeyword = decodeURI(keyword);

	const search = await getMovies(`search/multi?query=${decodedKeyword}`);

	return (
		<div className="w-full">
			<title>{`Search for ${decodedKeyword}`}</title>
			<Header title={`Result for: ${decodedKeyword}`} />
			<CardList data={search} />
		</div>
	);
};

export default Page;
