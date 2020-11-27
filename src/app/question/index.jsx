import React from "react";
import "./styles.css";

export default function Question({ questions }) {
  return (
    <>
      <div className="question-box">
        <p>{questions.questionText}</p>
      </div>
    </>
  );
}
