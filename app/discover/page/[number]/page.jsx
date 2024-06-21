import SelectType from "@/app/components/selectType";
import { getMovies } from "@/app/libs/api";
import CardList from "@/app/components/cardList";
import Pagination from "@/app/components/pagination";
import { notFound } from "next/navigation";
import Header from "@/app/components/header";

const Page = async ({ searchParams: { type }, params: { number } }) => {
	if ((type != "movie" && type != "tv") || !Number.isInteger(+number))
		notFound();

	const discover = await getMovies(`discover/${type}?page=${number}`);

	return (
		<div className="text-center w-full">
			<div className="md:relative flex flex-col items-center">
				<Header title={`Discover`} />
				<div className="pb-4 md:absolute md:end-0 md:bottom-0 md:pb-0">
					<SelectType />
				</div>
			</div>
			<CardList data={discover} />
			<Pagination page={number} lastPage={discover?.total_pages} />
		</div>
	);
};

export default Page;
