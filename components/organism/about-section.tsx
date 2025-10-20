import Image from "next/image";

// Import Assets //
import divider from "@/assets/images/img-divider.svg";
import sparkle from "@/assets/icons/icon-sparkle.svg";
import idcard from "@/assets/images/img-alchemist-id-card.webp";

export default function AboutSection() {
	return (
		<section className="flex flex-col w-full h-auto items-center justify-center px-content-padding-sm">
			<div className="flex flex-col w-full h-auto items-center justify-center border-x-[1px] border-dark-border">
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

				{/* <-- === Top Content Start === --> */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<div className="flex flex-col items-start justify-center w-full h-auto gap-[30px] px-[30px] pt-16 pb-[70px] border-b-[1px] border-dark-border">
						<p className="text-xs text-smoke font-satoshi">
							[ABOUT]
						</p>

						<h3 className="text-[32px] text-floral-white font-aeonik-medium leading-[1.13]">
							Hey, I am Alif Firdaus! A multi-disciplinary
							designer who enjoys bridging design and execution,
							turning ideas into products that are both functional
							and thoughtful.
						</h3>
					</div>

					<div className="flex flex-col items-start justify-center w-full h-auto gap-[30px] p-[30px] bg-void border-b-[1px] border-dark-border">
						<div className="flex flex-col items-start justify-center w-full h-auto gap-4">
							<div className="flex items-center justify-center w-fit h-auto gap-2">
								<Image
									src={sparkle}
									alt="Sparkle"
									title="Sparkle"
									priority={true}
									className="w-[15px] h-auto"
								/>
								<p className="text-sm text-floral-white font-aeonik-regular">
									Foreword
								</p>
							</div>

							<p className="text-base text-floral-white font-aeonik-regular leading-[1.4]">
								Over the years, I&apos;ve learned that good
								design isn&apos;t just about visuals — it&apos;s
								about process. I enjoy moving between
								disciplines, from UI/UX to no-code and
								front-end, because it allows me to see ideas
								through from concept to execution.
							</p>
						</div>

						<p className="text-base text-smoke font-aeonik-regular">
							©2025 Alchemist.
						</p>
					</div>
				</div>
				{/* <-- === Top Content End === --> */}

				{/* <-- === Bottom Content Start === --> */}
				<div className="flex flex-col items-center justify-center w-full h-auto">
					<div className="flex items-start w-full h-auto justify-center pb-20 border-b-[1px] border-dark-border">
						<Image
							src={idcard}
							alt="ID Card"
							title="ID Card"
							priority={true}
							className="object-center w-2/3 h-auto"
						/>
					</div>

					<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] pt-[30px] pb-[34px] bg-lava border-b-[1px] border-dark-border gap-[60px]">
						<div className="flex flex-col w-full h-auto items-start justify-center gap-4">
							<div className="flex items-center justify-center w-fit h-auto gap-2">
								<Image
									src={sparkle}
									alt="Sparkle"
									title="Sparkle"
									priority={true}
									className="w-[15px] h-auto"
								/>
								<p className="text-sm text-floral-white font-aeonik-regular">
									Versatile
								</p>
							</div>

							<h3 className="text-3xl text-floral-white font-aeonik-medium leading-[1.12]">
								Crafting beauty in pixels, and weaving magic in
								code.
							</h3>
						</div>

						<p className="text-base text-floral-white font-aeonik-regular">
							Crafting since 2020
						</p>
					</div>
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
