import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)

  const deleteTask = (id) => {
    console.log("Jam!!")
    const task = tasks.filter((task)=> task.id !== id )
    setTasks(task)
  }
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={TASKS} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
