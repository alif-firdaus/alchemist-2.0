"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1,
			wheelMultiplier: 1,
			touchMultiplier: 1.5,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
