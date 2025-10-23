import Image from "next/image";

// Import Components //
import WorksCard from "../molecule/works-card";

// Import Assets //
import deepstack from "@/assets/images/img-deepstack-mockup.webp";
import divider from "@/assets/images/img-divider.svg";

export default function WorksSection() {
	return (
		<section className="flex flex-col w-full h-auto items-center justify-center px-content-padding-sm">
			<div className="flex flex-col w-full h-auto items-center justify-center border-x-[1px] border-dark-border">
				{/* <-- === Top Content Start === --> */}
				<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-[70px] pt-16 pb-[70px] border-b-[1px] border-dark-border">
					<div className="flex flex-col items-start justify-center w-full h-auto gap-[30px] ">
						<p className="text-xs text-smoke font-satoshi">
							[WORKS]
						</p>

						<h1 className="text-[42px] text-floral-white font-aeonik-regular leading-none">
							From vision to visual,{" "}
							<span className="opacity-50">design in motion</span>
						</h1>
					</div>

					<h3 className="text-3xl text-floral-white font-aeonik-medium opacity-50">
						W+04
					</h3>
				</div>
				{/* <-- === Top Content End === --> */}

				{/* <-- === Bottom Content Start === --> */}
				<div className="flex flex-col items-center justify-center w-full h-auto">
					<WorksCard
						thumbnail={deepstack}
						thumbnailalt="Deepstack"
						thumbnailtitle="mDeepstack"
						order="W+01"
						title="Deepstack"
						description="Deepstack is a high-end AI workspace built for speed and clarity - made for founders who want a polished hub for work."
					/>

					<WorksCard
						thumbnail={deepstack}
						thumbnailalt="mockup"
						thumbnailtitle="mockup"
						order="W+02"
						title="REELKID"
						description="Velto helps founders automate operations, content workflows, and teamless processes in minutes, no-prompt engineering."
					/>

					<WorksCard
						thumbnail={deepstack}
						thumbnailalt="mockup"
						thumbnailtitle="mockup"
						order="W+03"
						title="Fluxify"
						description="Velto helps founders automate operations, content workflows, and teamless processes in minutes, no-prompt engineering."
					/>

					<WorksCard
						thumbnail={deepstack}
						thumbnailalt="mockup"
						thumbnailtitle="mockup"
						order="W+04"
						title="Vismonk"
						description="Velto helps founders automate operations, content workflows, and teamless processes in minutes, no-prompt engineering."
					/>
				</div>
				{/* <-- === Bottom Content End === --> */}

				{/* <-- === Divider Start === --> */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
					<div className="flex w-full h-20 items-center justify-center border-b-[1px] border-dark-border">
						<Image
							src={divider}
							alt="Divider"
							title="Divider"
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
