import React, { useState } from "react";
import Question from "./question";
import Answers from "./answers";
import Score from "./score";
import QuestionCounter from "./question-counter";
import TimeCountdown from "./timer";
import StartQuiz from "./start-quiz";
import questions from "./data/questions.json";
import { motion } from "framer-motion";
import "./styles.css";

export default function App() {
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = questions.length;

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="bg-gradiant">
      {showStart && (
        <StartQuiz setShowQuiz={setShowQuiz} setShowStart={setShowStart} />
      )}

      {showQuiz && (
        <motion.div
          className="container"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <div className="counter">
            <QuestionCounter
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
            <TimeCountdown
              initialMinute={4}
              initialSeconds={59}
              setShowScore={setShowScore}
              setShowQuiz={setShowQuiz}
            />
          </div>

          <Question questions={questions[currentQuestion]} />
          <Answers
            answers={questions[currentQuestion].answerOptions}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            questions={questions}
            setShowScore={setShowScore}
            setShowQuiz={setShowQuiz}
            setUserScore={setUserScore}
          />
        </motion.div>
      )}

      {showScore && (
        <Score
          userScore={userScore}
          setShowScore={setShowScore}
          setShowQuiz={setShowQuiz}
          setUserScore={setUserScore}
          setCurrentQuestion={setCurrentQuestion}
          totalQuestions={totalQuestions}
        />
      )}
    </div>
  );
}
