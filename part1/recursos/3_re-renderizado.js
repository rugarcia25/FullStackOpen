import React from "react";
import ReactDOM from "react-dom";

//¿Qué pasaría si quisiéramos crear un contador donde el valor aumentara en función del tiempo o con el clic de un botón?

const App = (props) => {
  const { counter } = props;
  return (
    <div>
      <p>HOLA</p>
      {counter}
    </div>
  );
};

let counter = 1;

const refresh = () => {
  ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
};

refresh();
counter += 1;
refresh();
counter += 1;
refresh();

/*

Cada 1s se refresca el contador

setInterval(() => {
  refresh()
  counter += 1
}, 1000)

*/

ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
