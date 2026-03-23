import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import questions from "./data/questions";

function App() {

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  return (
    <div className="App">

      <h1>Online Exam Portal</h1>

      {!showResult ? (
        <Quiz questions={questions} finishQuiz={finishQuiz} />
      ) : (
        <Result score={score} total={questions.length} />
      )}

    </div>
  );
}

export default App;