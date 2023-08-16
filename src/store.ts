import { create } from "zustand";

import { Task } from "./models.ts";

type Store = {
  tasks: Task[];
  add: (task: Task) => void;
  complete: (id: number) => void;
};

export const useStore = create<Store>((set) => ({
  tasks: [],
  add: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  complete: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: true } : task,
      ),
    })),
}));
