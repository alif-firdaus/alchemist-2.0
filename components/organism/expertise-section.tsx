import Image from "next/image";

// Import Components //
import ToolsPill from "../atom/tools-pill";

// Import Assets //
import figma from "@/assets/icons/figma.png";
import xd from "@/assets/icons/xd.png";
import ps from "@/assets/icons/ps.png";
import zeplin from "@/assets/icons/zeplin.png";
import framer from "@/assets/icons/framer.png";
import webflow from "@/assets/icons/webflow.png";
import flutterflow from "@/assets/icons/flutterflow.png";
import html from "@/assets/icons/html.png";
import css from "@/assets/icons/css.png";
import react from "@/assets/icons/react.png";
import next from "@/assets/icons/next.png";
import tailwind from "@/assets/icons/tailwind.png";
import divider from "@/assets/images/img-divider.svg";

export default function ExpertiseSection() {
	return (
		<section className="flex flex-col w-full h-auto items-center justify-center px-content-padding-sm">
			<div className="flex flex-col w-full h-auto items-center justify-center border-x-[1px] border-dark-border">
				{/* <-- === Top Content Start === --> */}
				<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-[70px] pt-16 pb-[70px] border-b-[1px] border-dark-border">
					<div className="flex flex-col items-start justify-center w-full h-auto gap-[30px] ">
						<p className="text-xs text-smoke font-satoshi">
							[EXPERTISEXXX]
						</p>

						<h1 className="text-[42px] text-floral-white font-aeonik-regular leading-none">
							From paper to pixel,{" "}
							<span className="opacity-50">
								craft in every detail
							</span>
						</h1>
					</div>

					<h3 className="text-3xl text-floral-white font-aeonik-medium opacity-50">
						E+03
					</h3>
				</div>
				{/* <-- === Top Content End === --> */}

				{/* <-- === Bottom Content Start === --> */}
				<div className="flex flex-col items-center justify-center w-full h-auto">
					{/* <-- == UI/UX Design Start == --> */}
					<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-[120px] pt-16 pb-[70px] border-b-[1px] border-dark-border">
						<div className="flex flex-col items-start justify-center w-full h-auto gap-7">
							<p className="text-xs text-smoke font-satoshi">
								[E+01]
							</p>
							<h3 className="text-[32px] text-floral-white font-aeonik-medium leading-[1.2]">
								UI/UX <br />{" "}
								<span className="opacity-50">Design</span>
							</h3>
							<p className="text-base text-smoke font-aeonik-regular leading-snug">
								I turn messy problems into clear, meaningful
								digital experiences, where every screen and
								interaction feels effortless.
							</p>
						</div>

						<div className="flex flex-wrap w-full h-auto gap-3 items-center justify-start">
							<ToolsPill
								logo={figma}
								logoalt="Figma"
								title="Figma"
							/>
							<ToolsPill
								logo={xd}
								logoalt="Adobe XD"
								title="Adobe XD"
							/>
							<ToolsPill
								logo={ps}
								logoalt="Adobe Photoshop"
								title="Adobe Photoshop"
							/>
							<ToolsPill
								logo={zeplin}
								logoalt="Zeplin"
								title="Zeplin"
							/>
						</div>
					</div>
					{/* <-- == UI/UX Design End == --> */}

					{/* <-- == No-code Development Start == --> */}
					<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-[120px] pt-16 pb-[70px] border-b-[1px] border-dark-border">
						<div className="flex flex-col items-start justify-center w-full h-auto gap-7">
							<p className="text-xs text-smoke font-satoshi">
								[E+02]
							</p>
							<h3 className="text-[32px] text-floral-white font-aeonik-medium leading-[1.2]">
								No-code <br />{" "}
								<span className="opacity-50">Development</span>
							</h3>
							<p className="text-base text-smoke font-aeonik-regular leading-snug">
								I use no-code platforms to streamline
								development and shorten the gap between idea and
								launch with speed and flexibility.
							</p>
						</div>

						<div className="flex flex-wrap w-full h-auto gap-3 items-center justify-start">
							<ToolsPill
								logo={framer}
								logoalt="Framer"
								title="Framer"
							/>
							<ToolsPill
								logo={webflow}
								logoalt="Webflow"
								title="Webflow"
							/>
							<ToolsPill
								logo={flutterflow}
								logoalt="Flutterflow"
								title="Flutterflow"
							/>
						</div>
					</div>
					{/* <-- == No-code Development End == --> */}

					{/* <-- == Front-end Development Start == --> */}
					<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-[120px] pt-16 pb-[70px] border-b-[1px] border-dark-border">
						<div className="flex flex-col items-start justify-center w-full h-auto gap-7">
							<p className="text-xs text-smoke font-satoshi">
								[E+03]
							</p>
							<h3 className="text-[32px] text-floral-white font-aeonik-medium leading-[1.2]">
								Front-end <br />{" "}
								<span className="opacity-50">Development</span>
							</h3>
							<p className="text-base text-smoke font-aeonik-regular leading-snug">
								Bridging design and technology by building fast,
								accessible, and reliable front-end experiences
								across devices and platforms.
							</p>
						</div>

						<div className="flex flex-wrap w-full h-auto gap-3 items-center justify-start">
							<ToolsPill
								logo={html}
								logoalt="HTML"
								title="HTML"
							/>
							<ToolsPill logo={css} logoalt="CSS" title="CSS" />
							<ToolsPill
								logo={react}
								logoalt="React"
								title="React"
							/>
							<ToolsPill
								logo={next}
								logoalt="Next.js"
								title="Next.js"
							/>
							<ToolsPill
								logo={tailwind}
								logoalt="Tailwind"
								title="Tailwind"
							/>
						</div>
					</div>
					{/* <-- == Front-end Development End == --> */}
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
