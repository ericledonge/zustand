import React, { useState } from "react";

import { Task } from "./models.ts";

export const TodoListReact = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      name: event.currentTarget["new-task"].value,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(event.currentTarget.id.split("-")[1]);
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
  <h1>TODO LIST APP</h1>

  <form onSubmit={handleAddTask}>
  <label htmlFor="new-task">Nouvelle tâche:</label>
  <input type="text" id="new-task" name="new-task" />
  <button type="submit">Ajouter</button>
    </form>

    <ul>
    {tasks.map((task) => (
        <li key={task.id}>
        <input
          type="checkbox"
      id={`task-${task.id}`}
  name={`task-${task.id}`}
  checked={task.done}
  onChange={handleCompleteTask}
  />
  <label
  htmlFor={`task-${task.id}`}
  className={task.done ? "done" : ""}
    >
    {task.name}
    </label>
    </li>
))}
  </ul>
  </div>
);
}


