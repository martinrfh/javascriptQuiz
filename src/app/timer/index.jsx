import React, { useState, useEffect } from "react";

export default function TimeCountdown({
  initialMinute,
  initialSeconds,
  setShowScore,
  setShowQuiz,
}) {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setShowQuiz(false);
          setShowScore(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div>
      <h3 className="timer">
        {minutes}:{seconds}
      </h3>
    </div>
  );
}
