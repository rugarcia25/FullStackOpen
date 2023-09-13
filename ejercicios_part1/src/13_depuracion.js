import React, { useState } from "react";
import ReactDOM from "react-dom";

// El componente History representa elementos React completamente
// diferentes según el estado de la aplicación. Esto se llama renderizado condicional.

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

// Para depurar objetos, se debe separar el contenido por 'comas' y no con el '+'
// console.log("Depurando: " , props)

const Button = (props) => {
  console.log("props: ", props);
  const { onClick, text } = props;
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}

      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
