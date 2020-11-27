import React from "react";

export default function QuestionCounter({ currentQuestion, totalQuestions }) {
  return (
    <div>
      <h3 className="question-number">
        Question
        <small> {currentQuestion + 1}</small>/{totalQuestions}
      </h3>
    </div>
  );
}
