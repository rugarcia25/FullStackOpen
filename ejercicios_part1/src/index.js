import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        Parte 1 <b>{props.part1}</b>
      </p>
      <p>
        Parte 2 <b>{props.part2}</b>
      </p>
      <p>
        Parte 3 <b>{props.part3}</b>
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Número total de ejercicios: <b>{props.total}</b>
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
