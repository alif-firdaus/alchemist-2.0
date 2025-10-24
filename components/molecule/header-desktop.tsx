"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButtonDarkDesktop from "../atom/primary-button-dark-desktop";
import logotype from "@/assets/images/img-logotype.svg";

export default function HeaderDesktop() {
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const targetId = e.currentTarget
			.getAttribute("href")
			?.replace("/#", "");
		const target = targetId ? document.getElementById(targetId) : null;
		if (!target) return;

		const yOffset = -100;
		const targetY =
			target.getBoundingClientRect().top + window.scrollY + yOffset;

		const duration = 1200;
		const startY = window.scrollY;
		const distance = targetY - startY;
		let startTime: number | null = null;

		const easeInOutQuad = (t: number) =>
			t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

		const animation = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const ease = easeInOutQuad(progress);

			window.scrollTo(0, startY + distance * ease);

			if (elapsed < duration) {
				requestAnimationFrame(animation);
			}
		};

		requestAnimationFrame(animation);
	};

	return (
		<header className="fixed top-0 left-[100px] right-0 z-20 bg-bgbase h-[100px] border-b-[1px] px-content-padding-lg border-dark-border flex items-center justify-center">
			{/* Inner container */}
			<div className="flex w-full max-w-[1536px] h-full items-center justify-between px-content-padding-lg border-x-[1px] border-dark-border">
				<Link href="/">
					<Image
						src={logotype}
						alt="Alchemist"
						priority={true}
						className="h-4 w-auto"
					/>
				</Link>

				<Link
					href="/#contact"
					onClick={handleSmoothScroll}
					className="flex w-fit h-fit items-center justify-center"
				>
					<PrimaryButtonDarkDesktop text="Drop me a message" />
				</Link>
			</div>
		</header>
	);
}
