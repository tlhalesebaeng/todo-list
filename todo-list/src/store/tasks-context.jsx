import { createContext } from "react";

export const TaskContext = createContext({
  tasks: [],
  removeTask: () => {},
}); //create the context

