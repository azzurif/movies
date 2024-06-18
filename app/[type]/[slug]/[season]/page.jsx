import Header from "@/app/components/header";
import { getMovies } from "@/app/libs/api";
import { getYear } from "@/app/libs/getYear";
import { popId } from "@/app/libs/popId";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Page = async ({ params: { type, slug, season } }) => {
	const tv = await getMovies(`tv/${popId(slug)}`);

	if (type !== "tv" || season !== "seasons") {
		notFound();
	}

	return (
		<>
			<title>{`${tv.name} - Seasons`}</title>
			<Header title={`${tv.name} (${getYear(tv, "first_air_date")})`} />
			<div className="flex flex-col gap-4 mb-4">
				{tv.seasons?.map((item) => (
					<div
						className="card card-side bg-base-100 shadow-xl w-full"
						key={item.id}
					>
						<figure>
							<Image
								width={100}
								height={150}
								src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${item.poster_path}`}
								alt={item.name}
							/>
						</figure>
						<div className="card-body my-auto">
							<Link href={`/tv/${slug}/season/${item.season_number}`} className="card-title text-2xl">
								{item.name}
							</Link>
							<ul className="list-disc gap-6 text-sm mb-4 ml-5 md:ml-0 md:space-y-0 md:flex md:gap-6">
								<li className="md:list-none">{item.air_date}</li>
								<li>{item.episode_count} Episodes</li>
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
