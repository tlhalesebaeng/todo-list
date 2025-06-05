import { createContext, useState } from 'react';

export const TaskContext = createContext({
    tasks: [],
    addTask: () => {},
    removeTask: () => {},
});

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        setTasks((prevTasks) => [...prevTasks, { id: Math.random(), title }]);
    };

    const removeTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };

    const taskContext = {
        tasks: tasks,
        addTask,
        removeTask,
    };

    return (
        <TaskContext.Provider value={taskContext}>
            {children}
        </TaskContext.Provider>
    );
};
