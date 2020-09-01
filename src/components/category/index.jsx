import React from "react";

function CategoryType({ name, setCategory }) {
  return (
    <button
      onClick={() => {
        setCategory(name);
      }}
    >
      {name}
    </button>
  );
}

export default CategoryType;
