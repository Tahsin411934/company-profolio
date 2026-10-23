"use server";

import { redirect } from "next/navigation";
import { startVerificationSession, verificationSessionKey } from "../../lib/verification-session";

const API_URL = "https://admin.onehaatbd.com/api/v1/register/store-owner";

export async function registerStoreOwner(prevState: any, formData: FormData) {
  try { verificationSessionKey(); } catch {
    return { success: false, errors: {}, message: "Registration is temporarily unavailable. Please try again later." };
  }
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (value !== null && value !== undefined) {
      data[key] = value as string;
    }
  }

  let registeredEmail = "";
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const body = await res.json();

    if (!res.ok) {
      return {
        success: false,
        errors: body.errors || {},
        message: body.message || "Registration failed.",
      };
    }

    const responseData = body.data || body;
    registeredEmail = responseData.user?.email || data.email;

  } catch {
    return {
      success: false,
      errors: {},
      message: "Network error. Please check your connection and try again.",
    };
  }
  await startVerificationSession(registeredEmail);
  redirect("/check-email");
}
