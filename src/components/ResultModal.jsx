import React from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function (
  { reset, targetTime, timeRemaining },
  ref
) {
  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={reset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}

      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>, document.getElementById("modal")
  );
});

export default ResultModal;
