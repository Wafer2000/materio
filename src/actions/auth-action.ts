"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import { z } from "zod";

export const LoginAction = async (values: z.infer<typeof LoginSchema>) => {
  try {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }

    return { error: "Error 500" };
  }
};

export const RegisterAction = async (values: z.infer<typeof LoginSchema>) => {
  try {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }

    return { error: "Error 500" };
  }
};
