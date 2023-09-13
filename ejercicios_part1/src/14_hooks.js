import React, { useState } from "react";
import ReactDOM from "react-dom";

/* La función useState (así como la función useEffect presentada más adelante en el curso)
 no se debe llamar desde dentro de un ciclo, una expresión condicional
  o cualquier lugar que no sea una función que defina un componente.
*/
// los hooks solo se pueden llamar desde el interior de un cuerpo de función que define un componente de React

const App = () => {
  // estos estan bien
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Juha Tauriainen");

  if (age > 10) {
    // esto no funciona!
    // const [foobar, setFoobar] = useState(null);
  }

  for (let i = 0; i < age; i++) {
    // también esto no está bien
    //const [rightWay, setRightWay] = useState(false);
  }

  const notGood = () => {
    // y esto también es ilegal
    //const [x, setX] = useState(-1000);
  };

  return (
    <div>
      <h1>La importancia de los HOOKS</h1>
    </div>
  );
};
