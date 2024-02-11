import React from "react";

const Filter = (newFilter, handleFilterChange) => {
  return (
    <div>
      <label>
        Filter by name<br></br>
        <input type="text" value={newFilter} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
