import React from "react";
import Task from "./Task";


function TaskList({ tasks, setTaskList, categoryList }) {
  function handleDelete(id) {
    let newTaskArr = [...tasks]
    console.log(id)
    setTaskList(newTaskArr.filter((task) => task.text !== id))
    console.log("IN HANDLE DELETE FUN", newTaskArr)
  }


  const filteredList = tasks.filter((task) => {
    if (task.category === categoryList) {
      return task
    } else if (categoryList === 'All') {
      return true
    }
    // return setTaskList(filteredList)
  }

  )
  const listTasks = filteredList.map((task) => {
    return (
      <Task
        key={task.text}
        id={task.text}
        text={task.text}
        category={task.category}
        handleDelete={handleDelete}
      />
    )
  })




  return (
    <div className="tasks">
      {listTasks}
    </div>
  );
}

export default TaskList;
