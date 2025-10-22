import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		const data = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["aliffirdaus@petaniweb.com"],
			subject: "Alchemist Connect",
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
			react: React.createElement(ContactFormEmail, {
				name,
				email,
				message,
			}),
		});

		return NextResponse.json({ success: true, data });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ success: false, error }, { status: 500 });
	}
}
