import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    const [tasks, setTasks] = useState(TASKS)
    const [selectedCategory, setSelectedCategory] = useState("All")

    
    const deleteTask = (task) => {
      const taskList = tasks.filter((t)=> t !== task )
    setTasks(taskList)
    }
    
    const filteredTasks = selectedCategory === "All"
      ? tasks : tasks.filter(task => task.category === selectedCategory)
  

    const addTask = (newTask) => {
      setTasks([...tasks, newTask])
    }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat=> cat !== "All")}
        onTaskFormSubmit={addTask}
        />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
