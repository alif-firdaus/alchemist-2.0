"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_action";

import PrimaryButton from "../atom/primary-button";
import PrimaryButtonLightDesktop from "../atom/primary-button-light-desktop";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactFormSchema),
	});

	const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
		setStatus("sending");

		const result = await sendEmail(data);

		if (result?.success) {
			setStatus("success");
			reset();

			setTimeout(() => {
				setStatus("idle");
			}, 6000);

			return;
		}

		console.error(result?.error);
		setStatus("error");
	};

	const buttonText =
		status === "sending"
			? "Transmitting..."
			: status === "success"
				? "Transmission complete"
				: "Initiate Transmission";

	return (
		<div className="w-full">
			<form
				onSubmit={handleSubmit(processForm)}
				className="flex flex-col w-full h-auto items-center lg:items-start justify-center gap-9"
			>
				{/* Name */}
				<div className="flex flex-col items-start justify-center gap-3 w-full h-auto">
					<p className="text-sm text-floral-white font-aeonik-regular">
						Name
					</p>
					<input
						type="text"
						placeholder="Enter your name"
						required
						autoComplete="off"
						{...register("name")}
						className="rounded w-full px-[18px] pt-3 pb-3.5 text-base placeholder-grey text-floral-white font-aeonik-regular bg-[#101010] focus:outline-none border border-dark-border focus:border-[#5C5C5C]"
					/>
					{errors.name?.message && (
						<p className="ml-1 mt-1 text-sm font-aeonik-regular text-red-400">
							{errors.name.message}
						</p>
					)}
				</div>

				{/* Email */}
				<div className="flex flex-col items-start justify-center gap-3 w-full h-auto">
					<p className="text-sm text-floral-white font-aeonik-regular">
						Email
					</p>
					<input
						type="email"
						placeholder="Your email"
						required
						autoComplete="off"
						{...register("email")}
						className="rounded w-full px-[18px] pt-3 pb-3.5 text-base placeholder-grey text-floral-white font-aeonik-regular bg-[#101010] focus:outline-none border border-dark-border focus:border-[#5C5C5C]"
					/>
					{errors.email?.message && (
						<p className="ml-1 mt-2 text-sm font-aeonik-regular text-red-400">
							{errors.email.message}
						</p>
					)}
				</div>

				{/* Message */}
				<div className="flex flex-col items-start justify-center gap-3 w-full h-auto">
					<p className="text-sm text-floral-white font-aeonik-regular">
						Message
					</p>
					<textarea
						placeholder="How can I help you?"
						required
						autoComplete="off"
						rows={4}
						{...register("message")}
						className="rounded w-full px-[18px] pt-3 pb-3.5 text-base placeholder-grey text-floral-white font-aeonik-regular bg-[#101010] focus:outline-none border border-dark-border focus:border-[#5C5C5C]"
					/>
					{errors.message?.message && (
						<p className="ml-1 mt-2 text-sm font-aeonik-regular text-red-400">
							{errors.message.message}
						</p>
					)}
				</div>

				{/* Submit button */}
				<div className="flex lg:hidden w-full h-auto">
					<PrimaryButton
						type="submit"
						text={buttonText}
						bgColor="bg-floral-white"
						textColor="text-charcoal"
						disabled={status === "sending"}
					/>
				</div>

				<div className="hidden lg:flex">
					<PrimaryButtonLightDesktop
						type="submit"
						text={buttonText}
					/>
				</div>
			</form>
		</div>
	);
}
