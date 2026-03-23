import React, { useState } from "react";

function Quiz({ questions, finishQuiz }) {

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      finishQuiz(score + 1);
    }
  };

  return (
    <div>

      <h2>{questions[current].question}</h2>

      {questions[current].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}

      <p>
        Question {current + 1} / {questions.length}
      </p>

    </div>
  );
}

export default Quiz;