"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Components //
import PrimaryButton from "../atom/primary-button";

// Import Assets //
import logotype from "@/assets/images/img-logotype.svg";
import dottedmenu from "@/assets/icons/icon-dotted-menu.svg";
import dottedclose from "@/assets/icons/icon-dotted-close.svg";
import dribbble from "@/assets/icons/icon-dribbble.svg";
import linkedin from "@/assets/icons/icon-linkedin.svg";
import x from "@/assets/icons/icon-x.svg";

function Navbar() {
	// Navbar Links //
	const navLinks = [
		{
			text: "About",
			path: "/#about",
		},
		{
			text: "Expertise",
			path: "/#expertise",
		},
		{
			text: "Works",
			path: "/#works",
		},
		{
			text: "Contact",
			path: "/#contact",
		},
	];

	// Navbar Mobile View //
	const [isOpen, setOpen] = useState(false);

	// Navbar Toggle //
	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	// Close menu when navigating //
	const closeMenu = () => {
		setOpen(false);
	};

	// External Link Path //
	interface NavItemProps {
		text: string;
		path: string;
	}

	const NavItem = ({ text, path }: NavItemProps) => {
		const isExternalLink = path.startsWith("http");

		const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
			if (path.startsWith("/#")) {
				e.preventDefault();
				const id = path.replace("/#", "");
				const section = document.getElementById(id);
				if (section) {
					const yOffset = -70;
					const y =
						section.getBoundingClientRect().top +
						window.scrollY +
						yOffset;
					window.scrollTo({ top: y, behavior: "smooth" });
					closeMenu();
				}
			}
		};

		if (isExternalLink) {
			return (
				<Link
					href={path}
					target="_blank"
					rel="noopener noreferrer"
					onClick={closeMenu}
				>
					{text}
				</Link>
			);
		} else {
			return (
				<Link href={path} onClick={handleClick}>
					{text}
				</Link>
			);
		}
	};

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav
				className={`fixed w-screen h-auto z-[10] border-b-[1px] border-dark-border ${
					isOpen ? "bg-void" : "bg-bgbase"
				} `}
			>
				<div className="flex w-full items-center justify-between h-full pl-content-padding-sm">
					<Link href="/" onClick={closeMenu}>
						<div className="w-fit h-fit flex items-center justify-center">
							<Image
								src={logotype}
								alt="Alchemist"
								priority={true}
								className="h-4 w-auto"
							/>
						</div>
					</Link>

					{/* <-- === Navbar Toggle === --> */}
					<div
						onClick={toggleMenu}
						className="flex items-center justify-center bg-floral-white w-[70px] h-[70px] cursor-pointer"
					>
						{isOpen ? (
							<Image
								src={dottedclose}
								alt="Close"
								priority={true}
								className="h-8 w-auto"
							/>
						) : (
							<Image
								src={dottedmenu}
								alt="Menu"
								priority={true}
								className="h-8 w-auto"
							/>
						)}
					</div>
					{/* <-- === Navbar Toggle === --> */}
				</div>
			</nav>

			{/* <-- ==== Navbar Open Start ==== --> */}
			<div
				className={`fixed w-full h-auto z-[9] px-5 bg-void border-b-[1px] border-dark-border lg:hidden
            ${
				isOpen
					? "top-0 left-0 transition-all duration-500 ease-in-out"
					: "-top-full left-0 transition-all duration-1000 ease-in-out"
			}`}
			>
				<div className="w-full flex flex-col h-full bg-void border-x-[1px] border-dark-border pt-[70px] justify-center items-center">
					<div className="flex flex-col w-full h-fit">
						{/* <-- === Navbar Links Start === --> */}
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="flex w-full h-[70px] items-center justify-start px-[30px] text-base text-floral-white font-aeonik-medium border-b-[1px] border-dark-border"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
						{/* <-- === Navbar Links End === --> */}

						{/* <-- === Socials Start === --> */}
						<div className="w-full flex items-center justify-center h-fit">
							<Link
								href="https://dribbble.com/aliffirdaus"
								target="_blank"
								rel="noopener noreferrer"
								className="flex w-full h-[70px] items-center justify-center border-r-[1px] border-b-[1px] border-dark-border"
							>
								<Image
									src={dribbble}
									alt="Dribbble"
									priority={true}
									className="h-[17px] w-auto"
								/>
							</Link>

							<Link
								href="https://www.linkedin.com/in/aliffirdaus97/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex w-full h-[70px] items-center justify-center border-r-[1px] border-b-[1px] border-dark-border"
							>
								<Image
									src={linkedin}
									alt="Linkedin"
									priority={true}
									className="h-[17px] w-auto"
								/>
							</Link>

							<Link
								href="https://twitter.com/whereisalif"
								target="_blank"
								rel="noopener noreferrer"
								className="flex w-full h-[70px] items-center justify-center border-b-[1px] border-dark-border"
							>
								<Image
									src={x}
									alt="X"
									priority={true}
									className="h-[17px] w-auto"
								/>
							</Link>
						</div>
						{/* <-- === Socials End === --> */}

						{/* <-- === CTA Start === --> */}

						<Link
							href="https://cal.com/aliffirdaus/discovery-call"
							target="_blank"
							rel="noopener noreferrer"
							className="flex w-full h-fit items-center justify-center px-[30px] py-[30px]"
						>
							<PrimaryButton
								text="Book a Discovery Call"
								bgColor="bg-charcoal"
								textColor="text-floral-white"
							/>
						</Link>

						{/* <-- === CTA End === --> */}
					</div>
				</div>
			</div>
			{/* <-- ==== Navbar Open End ==== --> */}
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
