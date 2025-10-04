// Import Sections //
import HeroSection from "@/components/organism/hero-section";

export default function Home() {
	return (
		<main className="w-screen h-fit">
			<HeroSection />

			<div className="w-full h-72 relative">
				{/* Your content here */}
				<div className="p-10 text-charcoal">
					This section will cover the hero section as you scroll down.
				</div>
			</div>
		</main>
	);
}
