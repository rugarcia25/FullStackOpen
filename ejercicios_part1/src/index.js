import React from "react";
import ReactDOM from "react-dom";

const Saludar = (props) => {
  const añoNacimiento = () => {
    const año = new Date().getFullYear();
    return año - props.edad;
  };

  return (
    <div>
      <p>
        Hola {props.nombre}, tienes {props.edad} años.
      </p>
      <p>Naciste por el año {añoNacimiento()}</p>
    </div>
  );
};

const App = () => {
  const nombre = "Ruben";
  const edad = 28;

  return (
    <div>
      <h1>Bienvenid@!</h1>
      <Saludar nombre="Alaya" edad={17 + 10} />
      <Saludar nombre={nombre} edad={edad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
