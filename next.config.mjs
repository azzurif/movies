/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "image.tmdb.org",
			},
			{
				hostname: "img.daisyui.com"
			}
		],
	},
};

export default nextConfig;
