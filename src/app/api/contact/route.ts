import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // If no API key is configured, just simulate success for demo purposes
    if (!process.env.RESEND_API_KEY) {
      console.log("Mock email send:", { name, email, subject, message });
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "adityash.sys@gmail.com",
      replyTo: email,
      subject: `Portfolio: ${subject || "New Message"}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
