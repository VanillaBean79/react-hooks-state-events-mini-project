import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) =>(
        <Task task={task} deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
