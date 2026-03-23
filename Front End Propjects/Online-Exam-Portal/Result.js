import React from "react";

function Result({ score, total }) {

  return (
    <div>

      <h2>Exam Completed</h2>

      <h3>
        Your Score: {score} / {total}
      </h3>

    </div>
  );
}

export default Result;