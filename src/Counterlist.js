import React, { useState } from "react";
import Counter from "./Counter";

function Counterlist() {
  const [countA, setCountA] = useState(10);
  const [countB, setCountB] = useState(20);
  const [countC, setCountC] = useState(30);

  const onIncrement = (id) => {
    console.log(id);
    if (id == 1) {
      setCountA(countA + 1);
    }
    //setCountA(countA + 1);
  };
  const onDecrement = () => {};

  return (
    <div>
      <h4>{countA + countB + countC}</h4>
      <Counter value={countA} id="1" incrementClick={onIncrement} />
      <Counter value={countB} id="2" incrementClick={onIncrement} />
      <Counter value={countC} id="3" incrementClick={onIncrement} />
    </div>
  );
}

export default Counterlist;
