import React, { useState } from "react";
import "./LessonUseState.css";

export function LessonUseState() {
  const [count, setCount] = useState(1);

  return (
    <div id="count">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
