import Link from "next/link";
import Search from "./search";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 sticky top-0 z-50">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-xl">IMovies</Link>
			</div>
			<div className="flex-none gap-2">
				<Search />
			</div>
		</div>
	);
};

export default Navbar;
