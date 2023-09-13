import React, { useState } from "react";
import ReactDOM from "react-dom";

// ! MUY IMPORTANTE ------- NO Definir componentes dentro de los componentes

/*
React trata un componente definido dentro de otro componente como un nuevo componente en cada render.
Esto hace imposible que React optimice el componente.
*/

// Este es lugar correcto para definir un componente
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  // No defina componentes adentro de otro componente

  const Display = (props) => <div>{props.value}</div>;

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
