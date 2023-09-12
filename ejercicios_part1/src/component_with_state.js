import React, { useState } from "react"; //  importa la función useState
import ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0); // el componente comienza con la llamada a la función

  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("renderizando...", counter);

  return (
    <div>
      <h1>Componente con ESTADO</h1>
      <p>Contador: {counter}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
