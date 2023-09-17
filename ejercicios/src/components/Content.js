import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((element) => (
        <Part
          key={element.id}
          name={element.name}
          exercises={element.exercises}
        />
      ))}
    </div>
  );
};

export default Content;
