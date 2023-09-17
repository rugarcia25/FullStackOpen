import React from "react";

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} <strong>{exercises}</strong>
      </p>
    </div>
  );
};

export default Part;
