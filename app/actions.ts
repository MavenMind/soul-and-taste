"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  // Echoed back so the form keeps what was typed after a failed send
  values?: Record<"name" | "email" | "dates" | "message", string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field
  if (field(formData, "company", 200)) {
    return { status: "success", message: "Thanks! We’ll reply within 24 hours." };
  }

  const name = field(formData, "name", 200);
  const email = field(formData, "email", 320);
  const dates = field(formData, "dates", 200);
  const message = field(formData, "message", 5000);
  const values = { name, email, dates, message };

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email.";
  if (!message) fieldErrors.message = "Tell us a little about your trip.";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the fields below.", fieldErrors, values };
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || user;
  if (!user || !pass) {
    console.error("Contact form: GMAIL_USER or GMAIL_APP_PASSWORD is not set");
    return {
      status: "error",
      message: "Sorry, the form isn’t working right now. Please message us on WhatsApp.",
      values,
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: pass.replace(/\s/g, "") },
  });

  try {
    await transporter.sendMail({
      from: `"Soul & Taste website" <${user}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New trip request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Travel dates: ${dates || "—"}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Contact form: Gmail send failed", err);
    return {
      status: "error",
      message: "Sorry, something went wrong. Please try again or message us on WhatsApp.",
      values,
    };
  }

  return { status: "success", message: "Thanks! We’ll reply within 24 hours." };
}
