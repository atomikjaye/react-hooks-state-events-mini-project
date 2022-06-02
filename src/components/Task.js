import React from "react";

function Task({ id, text, category, handleDelete }) {
  // console.log("TASK in TASK APP", task)
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}

export default Task;
