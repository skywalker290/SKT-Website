"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    const result = await signIn("credentials", { email, password, redirect: false });
    
    if (result?.error) {
      return "Invalid credentials.";
    }
  } catch (error: any) {
    if (error.message && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    return "Invalid credentials.";
  }
  
  // If we reach here, it's successful!
  redirect("/");
}
