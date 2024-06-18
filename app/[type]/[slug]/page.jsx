"use client";
import CardList from "@/app/components/cardList";
import CastCard from "@/app/components/castCard";
import Header from "@/app/components/header";
import Detail from "@/app/components/skeleton/detail";
import SubHeader from "@/app/components/subHeader";
import { getMovies } from "@/app/libs/api";
import { getYear } from "@/app/libs/getYear";
import { popId } from "@/app/libs/popId";
import { timeConvert } from "@/app/libs/timeConvert";
import Image from "next/image";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Page = ({ params: { type, slug } }) => {
	const url = usePathname();

	const [movie, setMovie] = useState(null);
	const [recommendations, setRecomendations] = useState(null);
	const [cast, setCast] = useState(null);
	const [dataFetched, setDataFetched] = useState(false);

	useEffect(() => {
		const getMovie = async () => {
			const detailMovie = await getMovies(`${type}/${popId(slug)}`);
			const recommendation = await getMovies(
				`${type}/${popId(slug)}/recommendations`
			);
			const cast = await getMovies(`${type}/${popId(slug)}/credits`);
			setMovie(detailMovie);
			setRecomendations(recommendation);
			setCast(cast);
			setDataFetched(true);
		};
		getMovie();
	}, []);

	const genres = movie?.genres?.map((item) => item.name).join(", ");
	const country = movie?.origin_country?.map((item) => item).join(" | ");

	useEffect(() => {
		if (dataFetched) {
			if (
				(type !== "movie" && type !== "tv") ||
				Object.keys(movie).length <= 3
			) {
				notFound();
			}
		}
	}, [dataFetched, type, movie, cast]);

	return (
		<>
			<title>{movie?.title || movie?.name}</title>
			{!dataFetched ? (
				<Detail />
			) : (
				<div>
					<div className="flex flex-col md:flex-row justify-center w-full gap-4 py-5">
						<div className="md:hidden text-center md:text-left">
							<Header
								title={`${movie?.title || movie?.name} (${
									getYear(movie, "release_date") ||
									getYear(movie, "first_air_date")
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
								<li className={movie?.release_date || "md:list-none"}>
									{country}
								</li>
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
											href={`${url}/season/${movie?.last_episode_to_air?.season_number}`}
											className="flex items-center gap-2 text-accent font-semibold text-sm md:text-base"
										>
											Season {movie?.last_episode_to_air?.season_number}
											<br /> (Current Season)
											<FaArrowRight />
										</Link>
										|
										<Link href={`${url}/seasons`} className="hover:text-accent">
											View all seasons
										</Link>
									</div>
								</>
							)}
						</div>
					</div>

					<div>
						<SubHeader title="Casts" />
						<CastCard data={cast} />
					</div>

					<div>
						<SubHeader title="Recommendations" />
						<CardList data={recommendations} />
					</div>
				</div>
			)}
		</>
	);
};

export default Page;
