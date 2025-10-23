import Image from "next/image";
import Link from "next/link";

// Import Assets //
import logotype from "@/assets/images/img-logotype.svg";
import logomark from "@/assets/images/img-logomark-cropped.svg";

export default function Footer() {
	return (
		<section className="flex flex-col w-full h-auto items-center justify-center px-content-padding-sm">
			<div className="flex flex-col w-full h-auto items-center justify-center border-x-[1px] border-b-[1px] border-dark-border">
				{/* <-- === Info Start === --> */}
				<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-28 pt-16 pb-20">
					<div className="flex flex-col w-full h-auto items-start justify-center gap-8">
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
						<h3 className="text-3xl text-floral-white font-aeonik-medium leading-[1.13]">
							Turning your ideas into real-life
							<span className="opacity-50">
								{" "}
								products is my calling
							</span>
						</h3>
					</div>

					<div className="flex flex-col w-full h-auto items-start justify-center gap-4">
						<div className="flex w-full h-auto items-center justify-start gap-7">
							<p className="text-base text-floral-white font-aeonik-regular">
								Dribbble
							</p>
							<p className="text-base text-floral-white font-aeonik-regular">
								Linkedin
							</p>
							<p className="text-base text-floral-white font-aeonik-regular">
								Twitter
							</p>
						</div>

						<p className="text-base text-smoke font-aeonik-regular">
							© 2025. Alchemist. All rights reserved. Made by Alif
							Firdaus.
						</p>
					</div>
				</div>
				{/* <-- === Info End === --> */}

				{/* <-- === Decoration Start === --> */}
				<div className="flex w-full h-auto items-center justify-end">
					<Image
						src={logomark}
						alt="Alchemist"
						priority={true}
						className="object-right object-cover h-full w-auto"
					/>
				</div>
				{/* <-- === Decoration End === --> */}
			</div>
		</section>
	);
}
