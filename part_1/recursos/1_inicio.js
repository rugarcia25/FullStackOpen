import React from "react";
import ReactDOM from "react-dom";

/*
<-- Único componente -->
!Los componentes deben ir siempre en mayúscula

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} + {b} is {a + b}
      </p>
    </div>
  );
};
*/

// Múltiples componentes

/*
const Hello = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Saludos!</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
};

*/
// Pasar varios props
const Hello = (props) => {
  return (
    <div>
      <p>
        Hola {props.name}, tienes {props.edad} años.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/rugarcia25">Rubén</a>
    </div>
  );
};

const App = () => {
  const name = "Alaya";
  const edad = 27;
  return (
    <div>
      <h1>Saludos!</h1>
      <Hello name="Ruben" edad={28} />
      <Hello name={name} edad={edad} />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
