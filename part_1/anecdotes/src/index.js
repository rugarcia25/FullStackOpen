import React, { useState } from "react";
import ReactDOM from "react-dom";

//! Aplicación Anecdotes

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = (props) => {
  let [selected, setSelected] = useState(0);
  // Generamos un array con los índices de anécdotas y los rellenamos a 0
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  // Generar una anécdota aleatoria
  const setToSelected = (value) => {
    value = Math.floor(Math.random() * anecdotes.length);
    setSelected(value);
  };

  // Array restante de la variable origen points
  const setToPoints = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  // Buscamos el valor con más votos
  const highestVotes = Math.max(...points);

  // Asignamos la anecdota con más votos
  const maxAnecdote = anecdotes[points.indexOf(highestVotes)];

  if (!highestVotes)
    return (
      <div>
        <h2>Anecdotes webpage!</h2>
        <div>
          <p>{props.anecdotes[selected]}</p>
        </div>
        <Button onClick={setToPoints} text="Vote" />
        <Button onClick={setToSelected} text="Generate" />
        <div>
          <h3>Anecdote with most votes</h3>
          <p>{maxAnecdote}</p> {/*Mostramos la anécdota más votada*/}
        </div>
      </div>
    );

  return (
    <div>
      <h2>Anecdotes webpage!</h2>
      <div>
        <p>{props.anecdotes[selected]}</p>
      </div>
      <Button onClick={setToPoints} text="Vote" />
      <Button onClick={setToSelected} text="Generate" />
      <div>
        <h3>Anecdote with most votes</h3>
        <p>{maxAnecdote}</p> {/*Mostramos la anécdota más votada*/}
        <p>
          <strong>Winner</strong> with {highestVotes} votes!
        </p>
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
