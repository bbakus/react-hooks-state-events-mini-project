import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (taskToDelete) => {

    const updatedTasks = tasks.filter(
      task => !(task.text === taskToDelete.text && task.category === taskToDelete.category)
    );
    setTasks(updatedTasks);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const displayedTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

    const handleTaskFormSubmit = (newTask) => {
      
      setTasks([...tasks, newTask]);
    };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}/>
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList 
        onDelete={handleDelete} 
        tasks={displayedTasks} 
        key={tasks.text}
        />
    </div>
  );
}

export default App;
