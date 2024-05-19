import { IWord } from "@/app/play/page";
import { enMockWord, trMockWord } from "@/mock/MockWords";
import { NextResponse } from "next/server";

type Params = {
  language: string;
};

function getRandomWords(words: IWord[], count: number) {
  const shuffledWords = words.sort(() => 0.5 - Math.random());
  return shuffledWords.slice(0, count);
}

export async function GET(request: Request, context: { params: Params }) {
  const languageParams = context.params.language;
  let words: any = [];
  if (languageParams === "en") {
    words = enMockWord;
  } else {
    words = trMockWord;
  }
  words = getRandomWords(words, 7);
  return NextResponse.json(words);
}
