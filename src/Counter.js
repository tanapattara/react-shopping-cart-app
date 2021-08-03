//rfce
import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(1);
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/100");

  const handleIncrement = () => {
    //props.value + 1;
    //console.log(count);
    props.incrementClick(props.id);
  };

  const handleDecrement = () => {};

  return (
    <div>
      <img src={imgUrl} alt="test" />
      <b className="m-2">{props.value}</b>
      <button className="btn btn-danger m-2" onClick={handleDecrement}>
        -
      </button>
      <button className="btn btn-primary m-2" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;
