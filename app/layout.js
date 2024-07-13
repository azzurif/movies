import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "I Movies",
	description: "Discover the latest movies and TV series",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="dark">
			<body className={`${inter.className} mx-8 md:mx-24`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
