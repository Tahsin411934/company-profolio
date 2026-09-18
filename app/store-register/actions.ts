"use server";

import { revalidatePath } from "next/cache";

const API_URL = "https://admin.onehaatbd.com/api/v1/register/store-owner";

export async function registerStoreOwner(formData: FormData) {
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (value !== null && value !== undefined) {
      data[key] = value as string;
    }
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        errors: result.errors || {},
        message: result.message || "Registration failed.",
      };
    }

    revalidatePath("/store-register");

    return {
      success: true,
      data: result.data || result,
      message: result.message || "Registration successful.",
    };
  } catch {
    return {
      success: false,
      errors: {},
      message: "Network error. Please check your connection and try again.",
    };
  }
}
