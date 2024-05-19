import React from "react";
import OtpInput from "react-otp-input";

interface IPlayEnterInput {
  currentWord: {
    word: string;
  };
  userWords: string;
  setUserWords: React.Dispatch<React.SetStateAction<string>>;
}

const PlayEnterInput = ({
  currentWord,
  userWords,
  setUserWords,
}: IPlayEnterInput) => {
  return (
    <div className="w-full h-1/2 flex items-center justify-center">
      <OtpInput
        value={userWords}
        onChange={setUserWords}
        numInputs={currentWord.word.length}
        inputStyle={{
          width: "3rem",
          height: "3rem",
          margin: "0 0.5rem",
          fontSize: "2rem",
          backgroundColor: "rgba(221, 221, 221, 0.1)",
          borderRadius: 4,
          border: "1px solid rgba(0, 0, 0, 0.3)",
        }}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default PlayEnterInput;
