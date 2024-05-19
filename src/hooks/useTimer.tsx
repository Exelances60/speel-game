import React, { useEffect, useState } from "react";

const useTimer = () => {
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, setSeconds]);

  return { seconds, setSeconds };
};

export default useTimer;
