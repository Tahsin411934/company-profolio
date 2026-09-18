"use server";

import { revalidatePath } from "next/cache";

const API_URL = "https://admin.onehaatbd.com/api/v1/register/store-owner";

export async function registerStoreOwner(prevState: any, formData: FormData) {
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

    const body = await res.json();

    if (!res.ok) {
      return {
        success: false,
        errors: body.errors || {},
        message: body.message || "Registration failed.",
      };
    }

    const responseData = body.data || body;
    const storeUrl = responseData.store_url || "";
    const storeInfo = responseData.store || {};

    revalidatePath("/store-register");

    return {
      success: true,
      data: {
        ...responseData,
        store_url: storeUrl,
        store: storeInfo,
      },
      message: body.message || "Registration successful. Please login.",
    };
  } catch {
    return {
      success: false,
      errors: {},
      message: "Network error. Please check your connection and try again.",
    };
  }
}
