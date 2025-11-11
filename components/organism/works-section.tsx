import Image from "next/image";

// Import Components //
import WorksCard from "../molecule/works-card";
import WorksCardDesktop from "../molecule/works-card-desktop";

// Import Assets //
import deepstack from "@/assets/images/img-deepstack.webp";
import deepstackdesktop from "@/assets/images/img-deepstack-desktop.webp";
import augentic from "@/assets/images/img-augentic.webp";
import augenticdesktop from "@/assets/images/img-augentic-desktop.webp";
import fluxify from "@/assets/images/img-fluxify.webp";
import fluxifydesktop from "@/assets/images/img-fluxify-desktop.webp";
import baseline from "@/assets/images/img-baseline.webp";
import baselinedesktop from "@/assets/images/img-baseline-desktop.webp";
import divider from "@/assets/images/img-divider.svg";

export default function WorksSection() {
	return (
		<section
			id="works"
			className="flex flex-col w-full h-auto items-center justify-center px-content-padding-sm lg:px-content-padding-lg"
		>
			<div className="flex flex-col w-full lg:max-w-[1536px] h-auto items-center justify-center border-x-[1px] border-dark-border">
				{/* <-- === Top Content Start === --> */}
				<div className="flex flex-col lg:flex-row items-start lg:items-end justify-center w-full h-auto px-[30px] lg:px-content-padding-lg gap-[70px] pt-16 lg:pt-[100px] pb-[70px] lg:pb-[110px] border-b-[1px] border-dark-border">
					<div className="flex flex-col items-start justify-center w-full h-auto gap-[30px] lg:gap-10">
						<p className="text-xs text-smoke font-satoshi">
							[WORKS]
						</p>

						<h1 className="text-[42px] lg:text-8xl text-floral-white font-aeonik-medium leading-none lg:leading-[0.92]">
							From vision to <br className="hidden lg:flex" />{" "}
							visual,{" "}
							<span className="opacity-50">
								design <br className="hidden lg:flex" /> in
								motion
							</span>
						</h1>
					</div>

					<h3 className="text-3xl lg:text-4xl text-floral-white font-aeonik-medium opacity-50">
						W+04
					</h3>
				</div>
				{/* <-- === Top Content End === --> */}

				{/* <-- === Bottom Content Start === --> */}
				<div className="flex lg:hidden flex-col items-center justify-center w-full h-auto">
					<WorksCard
						thumbnail={augentic}
						thumbnailalt="Augentic"
						order="W+01"
						title="Augentic"
						description="AI-powered company secretary platform that automates compliance, governance, and statutory filings — ensuring accuracy and efficiency 24/7."
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCard
						thumbnail={baseline}
						thumbnailalt="Baseline"
						order="W+02"
						title="Baseline"
						description="Baseline is a creative agency that blends structure and artistry, turning bold ideas into refined visual experiences built on clarity, rhythm, and purpose."
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCard
						thumbnail={deepstack}
						thumbnailalt="Deepstack"
						order="W+03"
						title="Deepstack"
						description="Built for solo founders and lean teams, Deepstack automates the busywork so you can focus on strategy, growth, and building what truly matters."
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCard
						thumbnail={fluxify}
						thumbnailalt="Fluxify"
						order="W+04"
						title="Fluxify"
						description="Fluxify is a modern SaaS platform built to simplify business operations — unifying tasks, teams, and workflows into one seamless experience."
					/>
				</div>
				{/* <-- === Bottom Content End === --> */}

				{/* <-- === Bottom Content Desktop Start === --> */}
				<div className="hidden lg:flex flex-col w-full h-auto items-center justify-center">
					<WorksCardDesktop
						order="W+01"
						title="Augentic"
						description="AI-powered company secretary platform that automates compliance, governance, and statutory filings — ensuring accuracy and efficiency 24/7."
						thumbnail={augenticdesktop}
						thumbnailalt="Augentic"
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCardDesktop
						order="W+02"
						title="Baseline"
						description="Baseline is a creative agency that blends structure and artistry, turning bold ideas into refined visual experiences built on clarity, rhythm, and purpose."
						thumbnail={baselinedesktop}
						thumbnailalt="Baseline"
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCardDesktop
						order="W+03"
						title="Deepstack"
						description="Built for solo founders and lean teams, Deepstack automates the busywork so you can focus on strategy, growth, and building what truly matters."
						thumbnail={deepstackdesktop}
						thumbnailalt="Deepstack"
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCardDesktop
						order="W+04"
						title="Fluxify"
						description="Fluxify is a modern SaaS platform built to simplify business operations — unifying tasks, teams, and workflows into one seamless experience."
						thumbnail={fluxifydesktop}
						thumbnailalt="Fluxify"
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
				</div>
				{/* <-- === Bottom Content Desktop End === --> */}

				{/* <-- === Divider Start === --> */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
					<div className="flex w-full h-20 items-center justify-center border-b-[1px] border-dark-border">
						<Image
							src={divider}
							alt="Divider"
							priority={true}
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
				</div>
				{/* <-- === Divider End === --> */}
			</div>
		</section>
	);
}
