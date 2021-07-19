import React, { useState } from "react";

export default function Counter() {
  var [counter, setCounter] = useState(0);
  let myStyle = {
    display: "inline-block",
  };
  return (
    <div className="container" style={myStyle}>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
}

