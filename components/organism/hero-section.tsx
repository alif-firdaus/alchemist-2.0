import Link from "next/link";

// Import Components //
import PrimaryButton from "../atom/primary-button";

export default function HeroSection() {
	return (
		<section className="w-full h-fit flex items-center justify-center px-5 bg-bgbase">
			<div className="flex flex-col w-full h-fit border-x-[1px] border-dark-border">
				{/* <-- === Top Content Start === --> */}

				<div className="flex flex-col items-center justify-center w-full h-fit px-[30px] pt-[130px] pb-[60px] gap-[60px] border-b-[1px] border-dark-border">
					<div className="flex flex-col items-center justify-start w-full h-fit gap-10">
						<div className="flex flex-col items-center justify-start w-full h-fit gap-5">
							<h1 className="text-[42px] text-floral-white font-aeonik-medium leading-none">
								Multi-disciplinary designer / from sketch to
								screen
							</h1>
							<p className="text-base text-smoke font-aeonik-regular leading-snug">
								As a multi-disciplinary designer, I bring ideas
								to life from concept to screen, combining
								exploration, clarity, and technical precision in
								every project.
							</p>
						</div>

						<Link
							href="https://cal.com/aliffirdaus/discovery-call"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center w-full h-auto"
						>
							<PrimaryButton
								text="Book a Discovery Call"
								bgColor="bg-floral-white"
								textColor="text-charcoal"
							/>
						</Link>
					</div>

					<div className="flex w-full items-center justify-start h-auto">
						<h1 className="text-[42px] text-floral-white font-aeonik-medium leading-none">
							<span className="text-lava">©</span>25
						</h1>
					</div>
				</div>
				{/* <-- === Top Content End === --> */}

				{/* <-- === Bottom Content Start === --> */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<div className="flex flex-col items-start justify-center w-full h-auto gap-[46px] p-[30px] border-b-[1px] border-dark-border">
						<h2 className="text-[40px] font-aeonik-medium text-floral-white">
							4+
						</h2>
						<p className="text-sm text-smoke leading-snug font-aeonik-regular">
							Years of experimenting, refining, and finding my
							voice in design.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center w-full h-auto gap-[46px] p-[30px] border-b-[1px] border-dark-border">
						<h2 className="text-[40px] font-aeonik-medium text-floral-white">
							12+
						</h2>
						<p className="text-sm text-smoke leading-snug font-aeonik-regular">
							Tools and technologies mastered across design and
							development.
						</p>
					</div>

					<div className="flex flex-col items-start justify-center w-full h-auto gap-[46px] p-[30px] border-b-[1px] border-dark-border">
						<h2 className="text-[40px] font-aeonik-medium text-floral-white">
							3+
						</h2>
						<p className="text-sm text-smoke leading-snug font-aeonik-regular">
							Disciplines across interface design, no-code tools,
							and modern front-end.
						</p>
					</div>
				</div>
				{/* <-- === Bottom Content End === --> */}
			</div>
		</section>
	);
}
