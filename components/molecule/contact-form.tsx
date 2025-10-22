"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_action";

// Import Components //
import PrimaryButton from "../atom/primary-button";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
	const [feedback, setFeedback] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactFormSchema),
	});

	const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
		setFeedback({ type: null, message: "" });

		const result = await sendEmail(data);

		if (result?.success) {
			console.log({ data: result.data });
			setFeedback({
				type: "success",
				message: "Your message has been sent!",
			});
			reset();
			return;
		}

		setFeedback({
			type: "error",
			message: "Something went wrong! Please try again.",
		});
		console.log(result?.error);
	};

	return (
		<div className="w-full">
			<form
				onSubmit={handleSubmit(processForm)}
				className="flex flex-col w-full h-auto items-center justify-center gap-9"
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

				{/* Submit */}
				<PrimaryButton
					type="submit"
					text={isSubmitting ? "Wait a sec..." : "Send message"}
					bgColor="bg-floral-white"
					textColor="text-charcoal"
				/>
			</form>

			{/* Feedback Message */}
			{feedback.message && (
				<p
					className={`mt-4 text-sm ${
						feedback.type === "success"
							? "text-green-400"
							: "text-red-400"
					}`}
				>
					{feedback.message}
				</p>
			)}
		</div>
	);
}
