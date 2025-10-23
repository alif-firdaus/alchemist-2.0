// Import Sections //
import HeroSection from "@/components/organism/hero-section";
import AboutSection from "@/components/organism/about-section";
import ExpertiseSection from "@/components/organism/expertise-section";
import WorksSection from "@/components/organism/works-section";
import ContactSection from "@/components/organism/contact-section";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-full h-auto">
			<HeroSection />
			<AboutSection />
			<ExpertiseSection />
			<WorksSection />
			<ContactSection />
		</main>
	);
}
