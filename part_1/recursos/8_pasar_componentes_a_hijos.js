import React, { useState } from "react";
import ReactDOM from "react-dom";

// Colocamos el estado de la aplicación en el componente App
// Lo pasamos al componente Display a través de props

const Display = (props) => {
  return (
    <div>
      <p>Contador: {props.counter}</p>
    </div>
  );
};

// Creamos un componente Button para los botones de nuestra aplicación.
// Tenemos que pasar el controlador de eventos, así como el título del botón a través de los props del componente

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

// Solo necesitamos pasarle el estado del counter

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const increasyByTen = () => setCounter(counter + 10);
  const decreaseByOne = () => setCounter(counter - 1);
  const decreaseByTen = () => setCounter(counter - 10);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <h1>Lección: Componentes a hijos</h1>
      <Display counter={counter} />
      <Button handleClick={increasyByTen} text="+10" />
      <Button handleClick={increaseByOne} text="+1" />
      <Button handleClick={setToZero} text="Reset" />
      <Button handleClick={decreaseByOne} text="-1" />
      <Button handleClick={decreaseByTen} text="-10" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
