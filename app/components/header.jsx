import React from "react";

const Header = ({ title }) => {
	return (
		<>
			<h1 className="text-3xl md:text-4xl font-bold py-6 text-primary">{title}</h1>
		</>
	);
};

export default Header;
