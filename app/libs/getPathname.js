"use client";
const { usePathname } = require("next/navigation");

export const GetPathname = () => {
	const pathname = usePathname();
	return pathname;
};
