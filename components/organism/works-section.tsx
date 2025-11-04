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
						description="Deepstack is a high-end AI workspace built for speed and clarity - made for founders who want a polished hub for work."
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCard
						thumbnail={deepstack}
						thumbnailalt="Deepstack"
						order="W+02"
						title="Deepstack"
						description="Velto helps founders automate operations, content workflows, and teamless processes in minutes, no-prompt engineering."
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCard
						thumbnail={fluxify}
						thumbnailalt="Fluxify"
						order="W+03"
						title="Fluxify"
						description="Velto helps founders automate operations, content workflows, and teamless processes in minutes, no-prompt engineering."
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCard
						thumbnail={deepstack}
						thumbnailalt="mockup"
						order="W+04"
						title="Vismonk"
						description="Velto helps founders automate operations, content workflows, and teamless processes in minutes, no-prompt engineering."
					/>
				</div>
				{/* <-- === Bottom Content End === --> */}

				{/* <-- === Bottom Content Desktop Start === --> */}
				<div className="hidden lg:flex flex-col w-full h-auto items-center justify-center">
					<WorksCardDesktop
						order="W+01"
						title="Augentic"
						description="Deepstack is a high-end AI workspace built for speed and clarity - made for founders who want a polished hub for work."
						thumbnail={augenticdesktop}
						thumbnailalt="Augentic"
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCardDesktop
						order="W+02"
						title="Deepstack"
						description="Deepstack is a high-end AI workspace built for speed and clarity - made for founders who want a polished hub for work."
						thumbnail={deepstackdesktop}
						thumbnailalt="Deepstack"
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCardDesktop
						order="W+03"
						title="Fluxify"
						description="Deepstack is a high-end AI workspace built for speed and clarity - made for founders who want a polished hub for work."
						thumbnail={fluxifydesktop}
						thumbnailalt="Fluxify"
					/>

					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

					<WorksCardDesktop
						order="W+04"
						title="Vismonk"
						description="Deepstack is a high-end AI workspace built for speed and clarity - made for founders who want a polished hub for work."
						thumbnail={deepstackdesktop}
						thumbnailalt="Deepstack"
					/>
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
