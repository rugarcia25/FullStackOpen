import React from "react";

const Total = ({ suma }) => {
  const total = suma.parts.reduce(
    (resultado, elemento) => resultado + elemento.exercises,
    0
  );
  return (
    <p>
      Total: <strong>{total}</strong> exercises.
    </p>
  );
};

export default Total;
