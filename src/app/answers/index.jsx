import React from "react";
import Button from "../button";
import "./styles.css";

export default function Answers({
  answers,
  setCurrentQuestion,
  currentQuestion,
  questions,
  setShowScore,
  setShowQuiz,
  setUserScore,
}) {
  function handleAnswerClick(isCorrect) {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowScore(true);
      setShowQuiz(false);
    }
    if (isCorrect === true) {
      setUserScore((prev) => prev + 1);
    }
  }

  return (
    <>
      <div className="answers-box">
        {answers.map((answer) => (
          <Button
            key={Math.random() * 100}
            onClick={() => handleAnswerClick(answer.isCorrect)}
            text={answer.answerText}
            padding={{ padding: "10px 10px" }}
            width={{ width: "100%" }}
          />
        ))}
      </div>
    </>
  );
}
