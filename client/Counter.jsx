import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter value- {counter}
      <button
        type="button"
        onClick={() => {
          setCounter((a) => a + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;
