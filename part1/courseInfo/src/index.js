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
      <h3>Parte {props.num}</h3>
      <p>
        {props.part1} {props.part2} {props.part3}
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
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
