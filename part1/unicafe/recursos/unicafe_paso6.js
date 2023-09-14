import React, { useState } from "react";
import ReactDOM from "react-dom";

//! Aplicación UNICAFE

/* 
Paso 6 - Establecer los datos en una tabla HTML
*/

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.percent}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  // En el caso de que no tengamos un total, muestro vacío, una vez tengamos los datos, devolvemos estadísticas
  if (!props.total)
    return (
      <div>
        <p>
          <strong>No feedback given</strong>
        </p>
      </div>
    );
  return (
    <div>
      <h2>Estadísticas</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.counterG} />
          <StatisticLine text="Neutral" value={props.counterN} />
          <StatisticLine text="Bad" value={props.counterB} />
          <StatisticLine text="Total" value={props.total} />
          <StatisticLine
            text="Positive"
            value={parseInt(props.positivePercent)}
            percent="%"
          />
          <StatisticLine text="Average" value={parseInt(props.average)} />
        </tbody>
      </table>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    setGood(newValue);
  };

  const setToNeutral = (newValue) => {
    setNeutral(newValue);
  };

  const setToBad = (newValue) => {
    setBad(newValue);
  };
  return (
    <div>
      <h1>Give us your feedback!</h1>
      <Button text="Good" onClick={() => setToGood(good + 1)} />
      <Button text="Neutral" onClick={() => setToNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setToBad(bad + 1)} />
      <Statistics
        total={good + neutral + bad}
        counterG={good}
        counterN={neutral}
        counterB={bad}
        positivePercent={(good * 100) / (good + neutral + bad)}
        average={(good + neutral + bad) / 3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
