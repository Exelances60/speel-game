"use server";

import { cookies } from "next/headers";

export const fetchWords = async () => {
  try {
    const cookiesStore = cookies();
    const languageCookie = cookiesStore.get("locale")?.value || "en";
    const response = await fetch(
      `http://localhost:3000/api/getLetters/${languageCookie}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        cache: "no-cache",
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching words");
  }
};
