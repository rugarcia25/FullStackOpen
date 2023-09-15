import React, { useState } from "react";
import ReactDOM from "react-dom";

// Paso 1

/*
Expanda la siguiente aplicación agregando un botón en el que se 
puede hacer clic para mostrar una anécdota aleatoria del campo de la ingeniería de software:
*/

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = (props) => {
  let [selected, setSelected] = useState(0);

  const setToSelected = (value) => {
    value = Math.floor(Math.random() * anecdotes.length);
    setSelected(value);
  };

  return (
    <div>
      <h2>Anecdotes webpage!</h2>
      <Button onClick={setToSelected} text="Generate" />
      <div>
        <p>{props.anecdotes[selected]}</p>
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
