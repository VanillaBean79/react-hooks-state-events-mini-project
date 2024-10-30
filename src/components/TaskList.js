import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) =>(
        <Task text={task.text} task={task} category={task.category} deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
