import Link from "next/link";

// Import Components //
import PrimaryButton from "../atom/primary-button";
import PrimaryButtonLightDesktop from "../atom/primary-button-light-desktop";
import SecondaryButtonDesktop from "../atom/secondary-button-desktop";

export default function HeroSection() {
	return (
		<section className="w-full h-fit flex items-center justify-center px-5 lg:px-content-padding-lg bg-bgbase">
			<div className="flex flex-col w-full lg:max-w-[1536px] h-fit border-x-[1px] border-dark-border">
				{/* <-- === Top Content Start === --> */}
				<div className="flex flex-col lg:flex-row items-center lg:items-end justify-center w-full h-fit px-[30px] lg:px-content-padding-lg pt-[130px] lg:py-28 pb-[60px] gap-[60px] border-b-[1px] border-dark-border">
					<div className="flex flex-col items-center justify-start w-full h-fit gap-10 lg:gap-12">
						<div className="flex flex-col items-center lg:items-start justify-start w-full h-fit gap-5 lg:gap-9">
							<h1 className="text-[42px] lg:text-8xl text-floral-white font-aeonik-medium leading-none lg:leading-[0.92]">
								Multi-disciplinary{" "}
								<br className="hidden lg:flex" /> designer /
								from <br className="hidden lg:flex" /> sketch to
								screen
							</h1>
							<p className="text-base text-smoke font-aeonik-regular leading-snug lg:leading-[1.5]">
								As a multi-disciplinary designer, I bring ideas
								to life from concept to screen, combining
								exploration, <br className="hidden lg:flex" />{" "}
								clarity, and technical precision in every
								project.
							</p>
						</div>

						<Link
							href="https://cal.com/aliffirdaus/discovery-call"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center lg:hidden w-full h-auto"
						>
							<PrimaryButton
								text="Book a Discovery Call"
								bgColor="bg-floral-white"
								textColor="text-charcoal"
							/>
						</Link>

						<div className="hidden lg:flex w-full h-auto gap-9 items-center justify-start">
							<Link
								href="https://cal.com/aliffirdaus/discovery-call"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-start w-auto h-auto"
							>
								<PrimaryButtonLightDesktop text="Book a Discovery Call" />
							</Link>

							<Link
								href="https://dribbble.com/aliffirdaus"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-start w-auto h-auto"
							>
								<SecondaryButtonDesktop
									text="Works Quality"
									iconBg="bg-charcoal"
								/>
							</Link>
						</div>
					</div>

					<div className="flex w-full lg:w-auto items-center justify-start lg:justify-end h-auto">
						<h1 className="text-[42px] lg:text-8xl text-floral-white font-aeonik-medium leading-none">
							<span className="text-lava">©</span>25
						</h1>
					</div>
				</div>
				{/* <-- === Top Content End === --> */}

				{/* <-- === Bottom Content Start === --> */}
				<div className="flex flex-col lg:flex-row w-full h-auto items-center justify-center">
					<div className="flex flex-col items-start justify-center w-full h-auto gap-[46px] lg:gap-20 p-[30px] lg:pt-content-padding-lg lg:px-content-padding-lg lg:pb-[54px] border-b-[1px] lg:border-r-[1px] border-dark-border">
						<h2 className="text-[40px] lg:text-6xl font-aeonik-medium text-floral-white">
							4+
						</h2>
						<p className="text-sm lg:text-[15px] text-smoke leading-snug font-aeonik-regular">
							Years of experimenting, refining,{" "}
							<br className="hidden lg:flex" /> and finding my
							voice in design.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center w-full h-auto gap-[46px] lg:gap-20 p-[30px] lg:pt-content-padding-lg lg:px-content-padding-lg lg:pb-[54px] border-b-[1px] lg:border-r-[1px] border-dark-border">
						<h2 className="text-[40px] lg:text-6xl font-aeonik-medium text-floral-white">
							12+
						</h2>
						<p className="text-sm lg:text-[15px] text-smoke leading-snug font-aeonik-regular">
							Tools and technologies mastered{" "}
							<br className="hidden lg:flex" /> across design and
							development.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center w-full h-auto gap-[46px] lg:gap-20 p-[30px] lg:pt-content-padding-lg lg:px-content-padding-lg lg:pb-[54px] border-b-[1px] border-dark-border">
						<h2 className="text-[40px] lg:text-6xl font-aeonik-medium text-floral-white">
							3+
						</h2>
						<p className="text-sm lg:text-[15px] text-smoke leading-snug font-aeonik-regular">
							Disciplines across interface design,{" "}
							<br className="hidden lg:flex" /> no-code tools, and
							modern front-end.
						</p>
					</div>
				</div>
				{/* <-- === Bottom Content End === --> */}
			</div>
		</section>
	);
}
