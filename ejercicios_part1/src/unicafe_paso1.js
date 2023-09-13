import React, { useState } from "react";
import ReactDOM from "react-dom";

//! Aplicación UNICAFE

// Paso 1 - Crear un dashboard de feedback del cliente

const App = () => {
  const [counterG, setCounterG] = useState(0);
  const [counterN, setCounterN] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const setToCounterG = (newValue) => {
    setCounterG(newValue);
  };

  const setToCounterN = (newValue) => {
    setCounterN(newValue);
  };

  const setToCounterB = (newValue) => {
    setCounterB(newValue);
  };

  return (
    <div>
      <h1>Give us your feedback!</h1>
      <button onClick={() => setToCounterG(counterG + 1)}>Good</button>
      <button onClick={() => setToCounterN(counterN + 1)}>Neutral</button>
      <button onClick={() => setToCounterB(counterB + 1)}>Bad</button>
      <h1>Estadísticas!</h1>
      <p>Good: {counterG}</p>
      <p>Neutral: {counterN}</p>
      <p>Bad: {counterB}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
