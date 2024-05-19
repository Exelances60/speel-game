"use server";

import { cookies } from "next/headers";

export const fetchWords = async () => {
  try {
    const cookiesStore = cookies();
    const languageCookie = cookiesStore.get("locale")?.value || "en";
    const response = await fetch(
      `${process.env.API_URL}api/getLetters/${languageCookie}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
