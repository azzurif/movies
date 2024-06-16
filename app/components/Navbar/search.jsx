"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = (e) => {
		const keyword = searchRef.current.value;
		if (!keyword || keyword.trim() == "") return;

		if (e.key === "Enter" || e.type === "click") {
			e.preventDefault();
			router.push(`/search/${keyword}`);
			searchRef.current.value = "";
		}
	};

	return (
		<div className="form-control relative">
			<input
				type="text"
				placeholder="Search"
				className="input input-bordered w-40 md:w-auto "
				ref={searchRef}
				onKeyDown={handleSearch}
			/>
			<button className="absolute top-3 end-3" onClick={handleSearch}>
				<FaSearch size={20} />
			</button>
		</div>
	);
};

export default Search;
