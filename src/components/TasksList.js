import React, { useState } from "react";
import Task from "../models/Task";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
 import "../TasksList.css"; // ייבוא קובץ העיצוב
//  import "./Ta"
// import "../Tas"
function TaskList() {
  const [tasks, setTasks] = useState([
    new Task(1, "ללמוד React", "2025-01-27"),
    new Task(2, "לסיים פרויקט", "2025-01-28"),
  ]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (description) => {
    const newTask = new Task(
      tasks.length + 1,
      description,
      new Date().toISOString().split("T")[0]
    );
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const saveTask = (id, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <h1 className="title">רשימת משימות</h1>
      <AddTask onAddTask={addTask} />
      {editingTask && (
        <EditTask
          task={editingTask}
          onSave={saveTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
      <ul className="task-container">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.description}</span>
            <span className="task-date">{task.date}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              מחיקה
            </button>
            <button className="edit-btn" onClick={() => setEditingTask(task)}>
              עריכה
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
