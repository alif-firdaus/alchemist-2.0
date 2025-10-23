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
import avatar from "@/assets/images/img-avatar.webp";
import dribbbleblack from "@/assets/icons/icon-dribbble-black.svg";
import linkedinblack from "@/assets/icons/icon-linkedin-black.svg";
import xblack from "@/assets/icons/icon-x-black.svg";

type NavbarProps = {
	variant?: "mobile" | "sidebar";
};

function Navbar({ variant = "mobile" }: NavbarProps) {
	// Navbar Links //
	const navLinks = [
		{ text: "About", path: "/#about" },
		{ text: "Expertise", path: "/#expertise" },
		{ text: "Works", path: "/#works" },
		{ text: "Contact", path: "/#contact" },
	];

	// Mobile Menu State //
	const [isOpen, setOpen] = useState(false);
	const toggleMenu = () => setOpen((prev) => !prev);
	const closeMenu = () => setOpen(false);

	// Link Handler //
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
		}

		return (
			<Link href={path} onClick={handleClick}>
				{text}
			</Link>
		);
	};

	// ======================
	// Sidebar (Desktop) Navbar
	// ======================
	if (variant === "sidebar") {
		return (
			<aside className="hidden lg:flex fixed left-0 top-0 h-screen w-auto bg-floral-white flex-col justify-between z-20">
				<div>
					<Image
						src={avatar}
						alt="avatar"
						priority={true}
						className="h-[100px] w-[100px]"
					/>

					{/* Nav Links */}
					<ul className="flex flex-col text-sm w-full h-auto items-center justify-center">
						{navLinks.map((link, index) => (
							<li
								key={index}
								className="flex items-center justify-center w-[100px] h-[100px] border-b-[1px] border-light-border font-aeonik-medium text-charcoal hover:text-floral-white bg-inherit hover:bg-lava duration-300 cursor-pointer"
							>
								<NavItem text={link.text} path={link.path} />
							</li>
						))}
					</ul>
				</div>

				{/* Footer Section */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<Link
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center w-[100px] h-[100px] border-b-[1px] border-t-[1px] border-light-border bg-inherit hover:bg-lava duration-300 cursor-pointer"
					>
						<Image
							src={dribbbleblack}
							alt="Dribbble"
							className="h-4 w-auto"
						/>
					</Link>

					<Link
						href="https://www.linkedin.com/in/aliffirdaus97/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center w-[100px] h-[100px] border-b-[1px] border-light-border bg-inherit hover:bg-lava duration-300 cursor-pointer"
					>
						<Image
							src={linkedinblack}
							alt="LinkedIn"
							className="h-4 w-auto"
						/>
					</Link>

					<Link
						href="https://twitter.com/whereisalif"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center w-[100px] h-[100px] bg-inherit hover:bg-lava duration-300 cursor-pointer"
					>
						<Image src={xblack} alt="X" className="h-4 w-auto" />
					</Link>
				</div>
			</aside>
		);
	}

	// ======================
	// Mobile Navbar (Default)
	// ======================
	return (
		<>
			{/* Navbar Mobile Start */}
			<nav
				className={`fixed w-screen h-auto z-[10] border-b-[1px] border-dark-border ${
					isOpen ? "bg-void" : "bg-bgbase"
				}`}
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

					{/* Navbar Toggle */}
					<div
						onClick={toggleMenu}
						className="flex items-center justify-center bg-floral-white w-[70px] h-[70px] cursor-pointer"
					>
						<Image
							src={isOpen ? dottedclose : dottedmenu}
							alt={isOpen ? "Close" : "Menu"}
							priority={true}
							className="h-8 w-auto"
						/>
					</div>
				</div>
			</nav>

			{/* Navbar Open */}
			<div
				className={`fixed w-full h-auto z-[9] px-5 bg-void border-b-[1px] border-dark-border lg:hidden ${
					isOpen
						? "top-0 left-0 transition-all duration-500 ease-in-out"
						: "-top-full left-0 transition-all duration-1000 ease-in-out"
				}`}
			>
				<div className="w-full flex flex-col h-full bg-void border-x-[1px] border-dark-border pt-[70px] justify-center items-center">
					<div className="flex flex-col w-full h-fit">
						{/* Navbar Links */}
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

						{/* Socials */}
						<div className="w-full flex items-center justify-center h-fit">
							{[
								{
									href: "https://dribbble.com/aliffirdaus",
									src: dribbble,
									alt: "Dribbble",
								},
								{
									href: "https://www.linkedin.com/in/aliffirdaus97/",
									src: linkedin,
									alt: "LinkedIn",
								},
								{
									href: "https://twitter.com/whereisalif",
									src: x,
									alt: "X",
								},
							].map(({ href, src, alt }, index) => (
								<Link
									key={index}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex w-full h-[70px] items-center justify-center border-b-[1px] border-dark-border"
								>
									<Image
										src={src}
										alt={alt}
										className="h-[17px] w-auto"
									/>
								</Link>
							))}
						</div>

						{/* CTA */}
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
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
