import { useStore } from "./store.ts";
import React from "react";

export const TodoListZustandV1 = () => {
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.add);
  const completeTask = useStore((state) => state.complete);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      name: event.currentTarget["new-task"].value,
      done: false,
    };
    addTask(newTask);
  };

  const handleCompleteTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(event.currentTarget.id.split("-")[1]);
    completeTask(id);
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
};
