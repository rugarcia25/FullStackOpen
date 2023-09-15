import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(10);

  /*
  Para que el botón reaccione a un evento de clic, 
  tenemos que agregarle un controlador de eventos.
  */

  // ! Falla ya que: El controlador de eventos no es una función sino una asignación de variable

  // <button onClick="crap...">button</button>;
  // <button onClick={value + 1}>button</button>;
  // <button onClick={(value = 0)}>button</button>;
  // <button onClick={setValue(0)}>button</button>

  // Forma correcta
  // El controlador de eventos ahora es la función ( ) => setValue (0).
  <button onClick={() => setValue(0)}>button</button>;

  const handleClick = () => {
    console.log("clicked the button");
    setValue(0);
  };

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
