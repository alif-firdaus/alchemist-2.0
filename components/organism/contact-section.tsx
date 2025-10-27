import Image from "next/image";
import Link from "next/link";

// Import Components //
import ContactForm from "../molecule/contact-form";
import EmailText from "../atom/email-text";

// Import Icons //
import { CornerRightDown } from "lucide-react";

// Import Assets //
import divider from "@/assets/images/img-divider.svg";
import email from "@/assets/images/img-email.svg";

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="flex flex-col w-full h-auto items-center justify-center px-content-padding-sm lg:px-content-padding-lg"
		>
			{/* <-- === Contact Section Mobile Start === --> */}
			<div className="flex lg:hidden flex-col w-full h-auto items-center justify-center border-x-[1px] border-dark-border">
				<div className="flex flex-col lg:flex-row w-full h-auto items-center justify-center">
					{/* <-- === Headline Start === --> */}
					<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-[30px] pt-16 pb-20 border-b-[1px] border-dark-border">
						<p className="text-xs text-smoke font-satoshi">
							[CONTACT]
						</p>

						<h1 className="text-[42px] text-floral-white font-aeonik-medium leading-none">
							Don&apos;t hesitate,{" "}
							<span className="opacity-50">just say hi!</span>
						</h1>
					</div>
					{/* <-- === Headline End === --> */}

					{/* <-- === Contact Form Start === --> */}
					<div className="flex flex-col w-full lg:w-1/2 h-auto items-center justify-center">
						<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] py-10 gap-11 border-b-[1px] border-dark-border">
							<div className="flex flex-col items-start justify-center w-full h-auto gap-2">
								<h3 className="text-[26px] text-floral-white font-aeonik-medium">
									Drop me a message
								</h3>
								<p className="text-base text-smoke font-aeonik-regular leading-snug">
									I&apos;m here to help you create something
									amazing.
								</p>
							</div>
							<ContactForm />
						</div>
					</div>
					{/* <-- === Contact Form End === --> */}
				</div>

				{/* <-- === Email Start === --> */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] pt-9 pb-9 gap-0.5 border-b-[1px] border-dark-border">
						<p className="text-base text-smoke font-aeonik-regular">
							Hate contact forms?
						</p>
						<div className="flex items-center justify-start w-full h-auto gap-2">
							<p className="text-base text-floral-white font-aeonik-regular pb-[3px]">
								Just drop me email instead
							</p>
							<CornerRightDown
								className="text-floral-white"
								size={12}
								strokeWidth={3}
							/>
						</div>
					</div>

					<div className="flex items-center justify-center p-[30px] bg-lava w-full h-auto">
						<Link
							href={"mailto:aliffirdaus@petaniweb.com"}
							target="_blank"
							className="flex items-center justify-center w-full h-auto"
						>
							<Image
								src={email}
								alt={email}
								priority={true}
								className="object-cover object-center w-full h-auto"
							/>
						</Link>
					</div>
				</div>
				{/* <-- === Email End === --> */}

				{/* <-- === Divider Start === --> */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
					<div className="flex w-full h-20 items-center justify-center border-b-[1px] border-dark-border">
						<Image
							src={divider}
							alt="Divider"
							priority={true}
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
				</div>
				{/* <-- === Divider End === --> */}
			</div>
			{/* <-- === Contact Section Mobile End === --> */}

			{/* <-- === Contact Section Desktop Start === --> */}
			<div className="hidden lg:flex flex-col w-full max-w-[1536px] h-full items-center justify-center border-x-[1px] border-dark-border">
				{/* <-- == Top Content Start == --> */}
				<div className="flex w-full items-stretch justify-center border-b-[1px] border-dark-border">
					{/* <-- = Headline Start = --> */}
					<div className="flex flex-col w-1/2 items-center justify-between p-content-padding-lg">
						<div className="flex flex-col items-start justify-center w-full gap-10">
							<p className="text-xs text-smoke font-satoshi">
								[EXPERTISE]
							</p>
							<h1 className="text-[42px] lg:text-8xl text-floral-white font-aeonik-medium leading-none lg:leading-[0.92]">
								Don&apos;t hesitate,{" "}
								<span className="opacity-50">just say hi!</span>
							</h1>
						</div>

						<div className="flex flex-col items-start justify-center w-full gap-1">
							<p className="text-base text-smoke font-aeonik-regular">
								Hate contact forms?
							</p>
							<div className="flex items-center justify-start w-full gap-2">
								<p className="text-base text-floral-white font-aeonik-regular pb-[3px]">
									Just drop me email instead
								</p>
								<CornerRightDown
									className="text-floral-white"
									size={12}
									strokeWidth={3}
								/>
							</div>
						</div>
					</div>
					{/* <-- = Headline End = --> */}

					{/* <-- = Contact Form Start = --> */}
					<div className="flex flex-col w-1/2 items-center justify-center border-l-[1px] border-dark-border">
						<div className="flex flex-col items-start justify-center w-full h-full p-content-padding-lg gap-14">
							<div className="flex flex-col items-start justify-center w-full gap-[6px]">
								<h3 className="text-[26px] text-floral-white font-aeonik-medium">
									Drop me a message
								</h3>
								<p className="text-base text-smoke font-aeonik-regular leading-snug">
									I&apos;m here to help you create something
									amazing.
								</p>
							</div>
							<ContactForm />
						</div>
					</div>
					{/* <-- = Contact Form End = --> */}
				</div>
				{/* <-- == Top Content End == --> */}

				<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>

				{/* <-- == Bottom Content Start == --> */}
				<Link
					href={"mailto:aliffirdaus@petaniweb.com"}
					target="_blank"
					className="flex w-full h-auto items-center justify-center px-content-padding-lg pb-content-padding-lg pt-14 bg-lava group cursor-pointer"
				>
					<EmailText className="w-full h-auto text-bgbase group-hover:text-floral-white transition-colors duration-500 ease-in-out" />
				</Link>
				{/* <-- == Bottom Content End == --> */}

				{/* <-- === Divider Start === --> */}
				<div className="flex flex-col w-full h-auto items-center justify-center">
					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
					<div className="flex w-full h-20 items-center justify-center border-b-[1px] border-dark-border">
						<Image
							src={divider}
							alt="Divider"
							priority={true}
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="flex w-full h-[30px] border-b-[1px] border-dark-border"></div>
				</div>
				{/* <-- === Divider End === --> */}
			</div>
			{/* <-- === Contact Section Desktop End === --> */}
		</section>
	);
}
