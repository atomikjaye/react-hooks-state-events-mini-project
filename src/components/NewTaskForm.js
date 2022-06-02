import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState("")
  const [newTaskCat, setNewTaskCat] = useState("Code")
  const renderCategories = categories.map((category) => {
    return (
      <option key={category}>{category}</option>
    )
  })
  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({
      text: newTask,
      category: newTaskCat
    })
  }

  function handleChange(e) {
    setNewTask(e.target.value)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTaskCat} onChange={(e) => setNewTaskCat(e.target.value)}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
