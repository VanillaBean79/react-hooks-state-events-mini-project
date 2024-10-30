import React from "react";

function Task({text, category, deleteTask, task}) {

  const handleClick = ()=>{
    deleteTask(task)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"  onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
