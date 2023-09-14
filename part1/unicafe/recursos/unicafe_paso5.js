import React, { useState } from "react";
import ReactDOM from "react-dom";

//! Aplicación UNICAFE

/* 
Paso 5 - Continuemos refactorizando la aplicación. Extraiga los dos componentes siguientes:

  Button para definir los botones utilizados para enviar comentarios
  StatisticLine para mostrar una única estadística, por ejemplo, la puntuación media.

  Para ser claros: el componente StatisticLine siempre muestra una única estadística,
lo que significa que la aplicación utiliza varios componentes para representar todas las estadísticas:
*/

const StatisticLine = (props) => {
  return (
    <div>
      <p>
        {props.text}: {props.value} {props.percent}
      </p>
    </div>
  );
};

const Statistics = (props) => {
  // En el caso de que no tengamos un total, muestro vacío, una vez tengamos los datos, devolvemos estadísticas
  if (!props.total) return "";
  return (
    <div>
      <h2>Estadísticas</h2>
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
    </div>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
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
