"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const changeLanguage = async (locale: string) => {
  cookies().set({
    name: "locale",
    value: locale,
    path: "/",
  });
  revalidatePath("/play");
};
