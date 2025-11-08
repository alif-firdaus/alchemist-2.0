import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Components //
import Navbar from "@/components/molecule/navbar";
import LenisWrapper from "@/components/atom/lenis-wrapper";
import HeaderDesktop from "@/components/molecule/header-desktop";
import Footer from "@/components/molecule/footer";

const aeonikLight = localFont({
	src: "./fonts/aeonik-light.otf",
	weight: "300",
	style: "normal",
	variable: "--font-aeonik-light",
});

const aeonikRegular = localFont({
	src: "./fonts/aeonik-regular.otf",
	weight: "400",
	style: "normal",
	variable: "--font-aeonik-regular",
});

const aeonikMedium = localFont({
	src: "./fonts/aeonik-medium.otf",
	weight: "500",
	style: "normal",
	variable: "--font-aeonik-medium",
});

const satoshi = localFont({
	src: "./fonts/satoshi-regular.otf",
	weight: "300",
	style: "normal",
	variable: "--font-satoshi",
});

export const metadata: Metadata = {
	title: "Alif Firdaus • The Alchemist",
	description:
		"Personal site of Alif Firdaus — designer, developer, and explorer of all things digital.",
	openGraph: {
		title: "Alif Firdaus • The Alchemist",
		description:
			"Personal site of Alif Firdaus — designer, developer, and explorer of all things digital.",
		url: "https://aliffirdaus.com",
		siteName: "The Alchemist",
		images: [
			{
				url: "/og-2400x1260.webp",
				width: 2400,
				height: 1260,
				alt: "Alif Firdaus — The Alchemist",
			},
			{
				url: "/og-1200x630.webp",
				width: 1200,
				height: 630,
				alt: "Alif Firdaus — The Alchemist",
			},
			{
				url: "/og-1200x1200.webp",
				width: 1200,
				height: 1200,
				alt: "Alif Firdaus — The Alchemist (Square)",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Alif Firdaus • The Alchemist",
		description:
			"Personal site of Alif Firdaus — designer, developer, and explorer of all things digital.",
		images: ["/og-1200x630.webp"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${aeonikLight.variable} ${aeonikRegular.variable} ${aeonikMedium.variable} ${satoshi.variable} bg-bgbase`}
			>
				{/* Mobile header */}
				<header className="flex lg:hidden">
					<Navbar />
				</header>

				{/* Desktop sidebar */}
				<header className="hidden lg:flex">
					<Navbar variant="sidebar" />
				</header>

				{/* Main content area */}
				<main className="lg:ml-[100px] lg:pt-[100px]">
					{/* Fixed header (desktop only) */}
					<div className="hidden lg:flex">
						<HeaderDesktop />
					</div>

					{/* Smooth scrolling wrapper */}
					<LenisWrapper>{children}</LenisWrapper>
				</main>

				{/* Footer aligned with content */}
				<div className="lg:ml-[100px]">
					<Footer />
				</div>
			</body>
		</html>
	);
}
