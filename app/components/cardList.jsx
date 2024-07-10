import Link from "next/link";
import React from "react";
import GetSlug from "../libs/getSlug";

const CardList = ({ data }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
			{data?.results?.map((item) => {
				const slug = GetSlug(item.title || item.name, item.id);

				return (
					<Link href={`/${item.title ? "movie" : "tv"}/${slug}`} key={item.id}>
						<div className="card card-compact w-auto bg-base-100 shadow-xl min-h-full">
							<figure>
								<img
									src={`${process.env.NEXT_PUBLIC_IMG_PATH}${item.poster_path}`}
									alt={item.original_title || item.original_name}
								/>
							</figure>
							<div className="card-body text-center">
								<h2 className="font-semibold text-lg">
									{item.title || item.name}
								</h2>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default CardList;
