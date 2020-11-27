import React from "react";
import Button from "../button";
import { motion } from "framer-motion";
import "./styles.css";

export default function Score({
  userScore,
  setShowQuiz,
  setShowScore,
  setUserScore,
  setCurrentQuestion,
  totalQuestions,
}) {
  function handleClick() {
    setCurrentQuestion(0);
    setUserScore(0);
    setShowScore(false);
    setShowQuiz(true);
  }

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      className="container"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="score-box">
        <h1>
          you scored {userScore} out of {totalQuestions}
        </h1>
        <Button
          onClick={handleClick}
          text="try again"
          padding={{ padding: "12px 25px" }}
          width={{ width: "auto" }}
        />
      </div>
    </motion.div>
  );
}
