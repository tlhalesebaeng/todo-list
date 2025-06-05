import { useContext, useRef } from 'react';

import './App.css';
import Task from './components/Task';
import { TaskContext } from './store/tasks-context';

function App() {
    const taskTitle = useRef();
    const { tasks, addTask } = useContext(TaskContext);

    const handleAddTask = (event) => {
        event.preventDefault();
        addTask(taskTitle.current.value);
        taskTitle.current.value = ''; // not declarative
    };

    return (
        <main className={tasks.length < 6 ? 'vp-height' : 'normal-height'}>
            <section>
                <h1 className="app-title">To Do List</h1>
                <form className="add-task-container" onSubmit={handleAddTask}>
                    <input
                        type="text"
                        placeholder="Task title"
                        ref={taskTitle}
                        required
                    />
                    <button title="add new task" type="submit">
                        +
                    </button>
                </form>
                <hr />
                <ul>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default App;
