import Header from "@/app/components/header";
import { getMovies } from "@/app/libs/api";
import { getYear } from "@/app/libs/getYear";
import { popId } from "@/app/libs/popId";
import { timeConvert } from "@/app/libs/timeConvert";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Page = async ({ params: { type, slug, season, id } }) => {
	const tv = await getMovies(
		`tv/${popId(slug)}?append_to_response=season%2F${id}`
	);

	if (type !== "tv" || season !== "season" || !tv[`season/${id}`]) {
		notFound();
	}

	return (
		<>
			<title>{`${tv.name} - Season ${id}`}</title>
			<Header title={`${tv.name} (${getYear(tv, "first_air_date")}) | Season ${id}`} />
			<div className="flex flex-col gap-4 mb-4">
				{tv[`season/${id}`]?.episodes?.map((item) => (
					<div
						className="card md:card-side bg-base-100 shadow-xl w-full"
						key={item.id}
					>
						<figure className="w-full h-44 md:w-80 md:h-auto relative">
							<Image
								src={`${process.env.NEXT_PUBLIC_IMG_PATH}${item.still_path}`}
								alt={item.name}
								fill={true}
								objectFit="cover"
							/>
						</figure>
						<div className="card-body my-auto flex flex-col items-start">
							<h2 className="card-title text-lg md:text-2xl">{item.name}</h2>
							<ul className="list-disc gap-6 text-sm mb-4 ml-5 md:ml-0 md:space-y-0 md:flex md:gap-6">
								<li className="md:list-none">{item.air_date}</li>
								<li>{timeConvert(item.runtime)}</li>
							</ul>

							{item.vote_average === 0 ? (
								<p className="hidden md:block">Not rated yet.</p>
							) : (
								<div className="hidden md:block">
									<p className="text-lg">Vote average</p>
									<p className="text-warning">{item.vote_average}/10</p>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Page;
