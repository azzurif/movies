import CardList from "@/app/components/cardList";
import CastCard from "@/app/components/castCard";
import Header from "@/app/components/header";
import SubHeader from "@/app/components/subHeader";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "@/app/components/utils/videoPlayer";
import { getMovies } from "@/app/libs/api";
import { getYear } from "@/app/libs/getYear";
import { popId } from "@/app/libs/popId";
import { timeConvert } from "@/app/libs/timeConvert";
import { notFound } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import GetSlug from "@/app/libs/getSlug";

const Page = async ({ params: { type, slug } }) => {
	const movie = await getMovies(
		`${type}/${popId(
			slug
		)}?append_to_response=recommendations%2Ccredits%2Cvideos`
	);

	const currentSlug = GetSlug(movie.title || movie.name, movie.id);
	const genres = movie?.genres?.map((item) => item.name).join(", ");
	const country = movie?.origin_country?.map((item) => item).join(" | ");
	const trailerId = movie?.videos?.results?.find(
		(video) => video.type === "Trailer"
	);

	if ((type !== "movie" && type !== "tv") || currentSlug !== slug) notFound();

	return (
		<>
			<title>{movie?.title || movie?.name}</title>
			<div>
				<VideoPlayer trailerId={trailerId.key} />
			</div>
			<div className="flex flex-col md:flex-row justify-center w-full gap-4 py-5">
				<div className="md:hidden text-center md:text-left">
					<Header
						title={`${movie?.title || movie?.name} (${
							getYear(movie, "release_date") || getYear(movie, "first_air_date")
						})`}
					/>
				</div>
				<Image
					width={280}
					height={350}
					alt={movie?.original_title}
					src={`${process.env.NEXT_PUBLIC_IMG_PATH}${movie?.poster_path}`}
					className="mx-auto"
				/>
				<div className="flex flex-col md:ml-4 min-h-full">
					<div className="hidden md:block">
						<Header
							title={`${movie?.title || movie?.name} (${
								getYear(movie, "release_date") ||
								getYear(movie, "first_air_date")
							})`}
						/>
					</div>
					<ul className="list-disc text-sm ml-5 md:ml-0 md:space-y-0 md:flex md:gap-6">
						{movie?.release_date && (
							<li className="md:list-none">{movie?.release_date}</li>
						)}
						<li className={movie?.release_date || "md:list-none"}>{country}</li>
						<li>{genres}</li>
						{movie?.runtime && <li>{timeConvert(movie?.runtime)}</li>}
					</ul>
					<div>
						<h3 className="text-lg font-semibold">Rating</h3>
						<p className="text-warning">{movie?.vote_average}/10</p>
					</div>
					<p className="text-gray-400">{movie?.tagline}</p>
					<SubHeader title="Overview" />
					<p>{movie?.overview}</p>
					{movie?.last_episode_to_air && (
						<>
							<div className="flex items-center gap-3 mt-2">
								<Link
									href={`/${type}/${slug}/season/${movie?.last_episode_to_air?.season_number}`}
									className="flex items-center gap-2 text-accent font-semibold text-sm md:text-base"
								>
									Season {movie?.last_episode_to_air?.season_number}
									<br /> (Current Season)
									<FaArrowRight />
								</Link>
								|
								<Link
									href={`/${type}/${slug}/seasons`}
									className="hover:text-accent"
								>
									View all seasons
								</Link>
							</div>
						</>
					)}
				</div>
			</div>

			<div>
				<SubHeader title="Casts" />
				<CastCard data={movie?.credits} />
			</div>

			<div>
				<SubHeader title="Recommendations" />
				<CardList data={movie?.recommendations} />
			</div>
		</>
	);
};

export default Page;
