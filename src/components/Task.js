import React from "react";

function Task({ id, task, handleDelete }) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}

export default Task;
