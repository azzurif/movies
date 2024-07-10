"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ page, lastPage }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	let newPathname = pathname.split("/");
	newPathname.pop();
	const lessPathname = newPathname.join("/");

	const handlePrev = () => {
		router.push(`${lessPathname}/${Number(page) - 1}?${searchParams}`);
	};

	const handleNext = () => {
		router.push(`${lessPathname}/${Number(page) + 1}?${searchParams}`);
	};

	return (
		<div className="flex justify-center items-center px-2 py-4 gap-4 text-color-primary text-xl">
			{page <= 1 ? null : (
				<button
					onClick={handlePrev}
					className="transition-all hover:text-accent underline"
				>
					Prev
				</button>
			)}
			<p>
				{page} of {lastPage}
			</p>
			{page >= { lastPage } ? null : (
				<button
					onClick={handleNext}
					className="transition-all hover:text-accent underline"
				>
					Next
				</button>
			)}
		</div>
	);
};

export default Pagination;
