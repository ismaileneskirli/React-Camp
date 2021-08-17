import React from "react";
import { useState } from "react";

function Counter() {
  // 2 ways of using useState
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1> {number} </h1>
      <button onClick={increase}> Increase number</button>
      <button onClick={() => setNumber(number - 1)}> Decrease number</button>
    </div>
  );
}

export default Counter;
