// Import Sections //
import HeroSection from "@/components/organism/hero-section";
import AboutSection from "@/components/organism/about-section";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-full h-auto">
			<HeroSection />
			<AboutSection />
			<div className="w-full h-72 relative">
				{/* Your content here */}
				<div className="p-10 text-charcoal">
					This section will cover the hero section as you scroll down.
				</div>
			</div>
		</main>
	);
}
