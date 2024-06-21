"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SelectType = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSelect = (term) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("type", term);
		} else {
			params.delete("type");
		}

		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<>
			<select
				className="select w-auto"
				defaultValue={searchParams.get("type")?.toString()}
				onChange={(e) => {
					handleSelect(e.target.value);
				}}
			>
				<option value="movie">Movie</option>
				<option value="tv">Tv series</option>
			</select>
		</>
	);
};

export default SelectType;
