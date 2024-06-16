import Image from "next/image";

const CastCard = ({ data }) => {
	return (
		<div className="carousel carousel-center rounded-box w-full">
			{data?.cast?.map((item) => (
				<div className="carousel-item w-32 md:w-44 relative" key={item.id}>
					<Image
						src={`${process.env.NEXT_PUBLIC_IMG_PATH}${item.profile_path}`}
						alt={item.original_name}
						width={150}
						height={200}
						className="h-full w-auto"
					/>
					<div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
						<h3 className="text-center text-lg">{item.name}</h3>
						<h4 className="text-center text-sm">{item.character}</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default CastCard;
