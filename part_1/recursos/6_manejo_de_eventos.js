import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        <h1>Manejo de Eventos</h1>
        <p>Contador {counter}</p>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Más!</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
