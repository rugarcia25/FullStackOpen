import React, { useState } from "react";
import ReactDOM from "react-dom";

//! Aplicación UNICAFE

// Paso 2 - Añadir más estadísticas (promedio y número total)

const App = () => {
  const [counterG, setCounterG] = useState(0);
  const [counterN, setCounterN] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const total = counterG + counterN + counterB;
  const average = total / 3;

  const setToCounterG = (newValue) => {
    setCounterG(newValue);
  };

  const setToCounterN = (newValue) => {
    setCounterN(newValue);
  };

  const setToCounterB = (newValue) => {
    setCounterB(newValue);
  };

  // Si no hay número, asignamos el valor 0 al valor, para que no obtener NaN

  let positivePercent = (counterG * 100) / total;
  if (!positivePercent) positivePercent = 0;

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
      <p>Total: {total}</p>
      <p>Average: {parseInt(average)}</p>
      <p>Positive: {parseInt(positivePercent)}%</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
