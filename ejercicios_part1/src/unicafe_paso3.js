import React, { useState } from "react";
import ReactDOM from "react-dom";

//! Aplicación UNICAFE

// Paso 3 - Refactorizado

const Statistics = (props) => {
  if (isNaN(props.positivePercent))
    return (
      <div>
        <h1>Estadísticas!</h1>
        <p>Good: {props.counterG}</p>
        <p>Neutral: {props.counterN}</p>
        <p>Bad: {props.counterB}</p>
        <p>Total: {props.total}</p>
        <p>Positive: 0 %</p>
        <p>Average: {parseInt(props.average)}</p>
      </div>
    );
  return (
    <div>
      <h1>Estadísticas!</h1>
      <p>Good: {props.counterG}</p>
      <p>Neutral: {props.counterN}</p>
      <p>Bad: {props.counterB}</p>
      <p>Total: {props.total}</p>
      <p>Positive: {parseInt(props.positivePercent)} %</p>
      <p>Average: {parseInt(props.average)}</p>
    </div>
  );
};

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
      <Statistics
        total={counterG + counterN + counterB}
        counterG={counterG}
        counterN={counterN}
        counterB={counterB}
        positivePercent={(counterG * 100) / (counterG + counterN + counterB)}
        average={(counterG + counterN + counterB) / 3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
