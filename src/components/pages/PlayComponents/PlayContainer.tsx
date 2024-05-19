"use client";
import useTimer from "@/hooks/useTimer";
import React, { useEffect, useState } from "react";
import RandomLetters from "./RandomLetters";
import PlayEnterInput from "./PlayEnterInput";
import { useTranslations } from "next-intl";
import ResutDrawer from "./ResutDrawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface IPlayContainer {
  words: randomLetters[];
}
interface randomLetters {
  word: string;
  letters: string[];
}

const PlayContainer = ({ words }: IPlayContainer) => {
  const router = useRouter();
  const t = useTranslations("Play");
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [userWords, setUserWords] = useState("");
  const [userScore, setUserScore] = useState(0);
  const { seconds, setSeconds } = useTimer();

  const restartGame = () => {
    router.refresh();
    setSeconds(60);
    setUserScore(0);
    setUserWords("");
    setCurrentWord(words[0]);
  };

  useEffect(() => {
    if (currentWord && userWords === currentWord.word && seconds > 0) {
      setSeconds((prev) => prev + 15);
      setUserScore((prev) => prev + currentWord.word.length);
      setCurrentWord((prev) => words[words.indexOf(prev) + 1]);
      setUserWords("");
    }
  }, [userWords]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-1/2 h-1/2 flex flex-col items-center justify-center">
        {seconds > 0 && currentWord ? (
          <>
            <p>
              {t("time")}: {seconds} ⌚
            </p>
            <RandomLetters currentWord={currentWord} userWords={userWords} />
            <PlayEnterInput
              currentWord={currentWord}
              userWords={userWords}
              setUserWords={setUserWords}
            />
          </>
        ) : (
          <>
            <h1>{t("gameOver")}</h1>
            <Button onClick={restartGame}>{t("restart")}</Button>
            <ResutDrawer userScore={userScore} resetGame={restartGame} />
          </>
        )}
      </div>
    </div>
  );
};

export default PlayContainer;
