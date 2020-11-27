import React from "react";
import Button from "../button";
import "./styles.css";

export default function StartQuiz({ setShowQuiz, setShowStart }) {
  function handleClick() {
    setShowQuiz(true);
    setShowStart(false);
  }
  return (
    <div className="center">
      <h1 className="title">Javascript Quiz</h1>
      <div className="btn-wrapper">
        <Button
          onClick={handleClick}
          text="start"
          padding={{ padding: "15px 65px" }}
          width={{ width: "auto" }}
        />
      </div>
    </div>
  );
}
