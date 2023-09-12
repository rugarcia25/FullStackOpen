import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>
        <h1>Controlador de eventos es una función!</h1>
        <p>Contador: {counter}</p>
      </div>

      <button onClick={increaseByOne}>plus</button>

      <button onClick={setToZero}>zero</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
