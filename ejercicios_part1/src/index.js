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
  const num = 1;
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  return (
    <div>
      <Part num={num} part1={part1} />
      <Part num={num + 1} part2={part2} />
      <Part num={num + 2} part3={part3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        <h3>Parte {props.num}</h3> {props.part1} {props.part2} {props.part3}
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
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
