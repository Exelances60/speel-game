import { fetchWords } from "@/action/fetchWords";
import PlayContainer from "@/components/pages/PlayComponents/PlayContainer";
import React from "react";

export interface IWord {
  word: string;
}
const PlayPage = async () => {
  const response = await fetchWords();
  if (!response) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const randomLetters = response.map((word: IWord) => {
    return {
      word: word.word,
      letters: word.word.split("").sort(() => 0.5 - Math.random()),
    };
  });
  return (
    <div className="w-full h-full">
      <PlayContainer words={randomLetters} />
    </div>
  );
};

export default PlayPage;
