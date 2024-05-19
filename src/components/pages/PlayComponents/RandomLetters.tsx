import React from "react";

interface IRandomLetters {
  currentWord: {
    word: string;
    letters: string[];
  };
  userWords: string;
}

const RandomLetters = ({ currentWord, userWords }: IRandomLetters) => {
  const handleInputColor = (letter: string) => {
    if (
      userWords.includes(letter) &&
      userWords.split("").indexOf(letter) === currentWord.word.indexOf(letter)
    ) {
      return "#00FF00";
    }
    return "#ee0000";
  };
  return (
    <div className="w-full h-1/2  flex items-center gap-10 justify-center">
      {currentWord?.letters.map((letter, index) => {
        return (
          <p
            className={`text-4xl `}
            key={index}
            style={{ color: handleInputColor(letter) }}
          >
            {letter}
          </p>
        );
      })}
    </div>
  );
};

export default RandomLetters;
