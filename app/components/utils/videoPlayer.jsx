"use client";
import YouTube from "react-youtube";
import { useState } from "react";
import { PiX, PiPlayFill } from "react-icons/pi";

const VideoPlayer = ({ trailerId }) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const option = {
		width: "370",
		height: "200",
	};

	return (
		<div className="fixed bottom-4 md:bottom-8 right-8 md:right-24 z-50">
			{isOpen ? (
				<div>
					<button
						className="float-right bg-neutral-content text-neutral text-lg"
						onClick={handleOpen}
					>
						<PiX size={24} />
					</button>
					<YouTube
						videoId={trailerId}
						onReady={(e) => e.target.pauseVideo()}
						opts={option}
					/>
				</div>
			) : (
				<button
					onClick={handleOpen}
					className="text-lg font-semibold py-1 px-3 rounded-md flex items-center gap-2 bg-neutral"
				>
					<PiPlayFill size={24} />
					Play trailer
				</button>
			)}
		</div>
	);
};

export default VideoPlayer;
