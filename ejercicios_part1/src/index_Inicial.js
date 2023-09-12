import React from "react";
import ReactDOM from "react-dom";

const Saludar = (props) => {
  return (
    <div>
      <p>
        Mi nombre es <b>{props.name}</b> y soy alumno de <b>FullStackOpen</b>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Curso FullStack by FullStackOpen</h1>
      <Saludar name="Rubén" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
