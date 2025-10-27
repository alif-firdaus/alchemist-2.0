import Image from "next/image";
import Link from "next/link";

// Import Assets //
import logotype from "@/assets/images/img-logotype.svg";
import logomark from "@/assets/images/img-logomark-cut.webp";

export default function Footer() {
	return (
		<section className="flex flex-col w-full h-auto items-center justify-center px-content-padding-sm lg:px-content-padding-lg">
			<div className="flex flex-col lg:flex-row w-full lg:max-w-[1536px] h-auto items-center justify-center border-x-[1px] border-b-[1px] border-dark-border">
				{/* <-- === Info Start === --> */}
				<div className="flex flex-col items-start lg:items-stretch justify-center w-full lg:w-1/2 h-auto lg:h-[700px] px-[30px] lg:px-content-padding-lg gap-28 lg:gap-0 lg:justify-between pt-9 lg:py-14 pb-20">
					<div className="flex flex-col w-full h-auto items-start justify-center gap-8 lg:gap-9">
						<Link href="/">
							<div className="w-fit h-fit flex items-center justify-center">
								<Image
									src={logotype}
									alt="Alchemist Logo"
									priority={true}
									className="h-4 w-auto"
								/>
							</div>
						</Link>
						<h3 className="text-3xl lg:text-5xl text-floral-white font-aeonik-medium leading-[1.13]">
							Turning your ideas into{" "}
							<br className="hidden lg:flex" /> real-life
							<span className="opacity-50">
								{" "}
								products is my <br className="hidden lg:flex" />{" "}
								calling
							</span>
						</h3>
					</div>

					<div className="flex flex-col w-full h-auto items-start justify-center gap-4">
						{/* <-- == Socials Mobile Start == --> */}
						<div className="flex lg:hidden w-full h-auto items-center justify-start gap-7">
							<Link
								href="https://dribbble.com/aliffirdaus"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="text-base text-floral-white font-aeonik-regular">
									Dribbble
								</p>
							</Link>

							<Link
								href="https://www.linkedin.com/in/aliffirdaus97/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="text-base text-floral-white font-aeonik-regular">
									Linkedin
								</p>
							</Link>

							<Link
								href="https://twitter.com/whereisalif"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="text-base text-floral-white font-aeonik-regular">
									Twitter
								</p>
							</Link>
						</div>
						{/* <-- == Socials Mobile End == --> */}

						{/* <-- == Socials Desktop Start == --> */}
						<div className="hidden lg:flex w-full h-auto items-center justify-start gap-7">
							<Link
								href="https://dribbble.com/aliffirdaus"
								target="_blank"
								rel="noopener noreferrer"
								className="relative group h-fit overflow-hidden flex items-center cursor-pointer"
							>
								<span className="block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
									Dribbble
								</span>
								<span className="absolute left-0 top-[140%] block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:translate-y-[-140%]">
									Dribbble
								</span>
							</Link>

							<Link
								href="https://www.linkedin.com/in/aliffirdaus97/"
								target="_blank"
								rel="noopener noreferrer"
								className="relative group h-fit overflow-hidden flex items-center cursor-pointer"
							>
								<span className="block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
									Linkedin
								</span>
								<span className="absolute left-0 top-[140%] block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:translate-y-[-140%]">
									Linkedin
								</span>
							</Link>

							<Link
								href="https://twitter.com/whereisalif"
								target="_blank"
								rel="noopener noreferrer"
								className="relative group h-fit overflow-hidden flex items-center cursor-pointer"
							>
								<span className="block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
									Twitter
								</span>
								<span className="absolute left-0 top-[140%] block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:translate-y-[-140%]">
									Twitter
								</span>
							</Link>
						</div>
						{/* <-- == Socials Desktop End == --> */}

						<p className="text-base lg:text-sm text-smoke font-aeonik-regular">
							© 2025. Alchemist. All rights reserved. Made by Alif
							Firdaus.
						</p>
					</div>
				</div>
				{/* <-- === Info End === --> */}

				{/* <-- === Decoration Start === --> */}
				<div className="flex w-full lg:w-1/2 h-auto lg:h-[700px] items-center lg:items-end justify-end">
					<Image
						src={logomark}
						alt="Alchemist"
						priority={true}
						className="object-right object-cover h-full lg:h-[40%] w-auto"
					/>
				</div>
				{/* <-- === Decoration End === --> */}
			</div>
		</section>
	);
}
