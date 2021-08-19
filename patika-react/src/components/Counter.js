import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  // 2 ways of using useState
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);

  // empty [] means you catch the mount time.
  useEffect(() => {
    console.log("component mounted.");

    return () => console.log("component unmounted");
  }, []);

  // whenever number is updated call this function
  useEffect(() => {
    console.log("price component updated");
    setPrice(number * 5);
  }, [number]);

  const increase = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1> {number} </h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {" "}
        Increase number
      </button>
      <button onClick={() => setNumber(number - 1)}> Decrease number</button>

      <br />

      <h1> {price}</h1>
    </div>
  );
}

export default Counter;
