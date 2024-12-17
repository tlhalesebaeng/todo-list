import { useRef, useState } from 'react';

import './App.css'
import Task from './components/Task';
import { TaskContext } from './store/tasks-context';

function App() {
  const taskTitle = useRef();
  const [tasks, updateTasks] = useState([]);

  function handleAddTask(event){
    event.preventDefault();
    const title = taskTitle.current.value;

    const newTasks = tasks.slice();
    const newTask = {
      id: Math.random(),
      title: title
    }

    newTasks.push(newTask);
    updateTasks(newTasks);

    event.target.reset();
  }

  function handleRemoveTask(id){
    const newTasks = tasks.filter((task) => task.id !== id);
    updateTasks(newTasks);
  }

  const taskContext = {
    tasks: tasks,
    removeTask: handleRemoveTask
  };

  return (
    <main className={tasks.length < 6 ? 'vp-height' : 'normal-height'}>
      <section>
        <h1 className='app-title'>To Do List</h1>
        <form className='add-task-container' onSubmit={handleAddTask}>
          <input 
            type='text' 
            placeholder='Task title' 
            ref={taskTitle} 
            required
          />
          <button title='add new task' type='submit'>+</button>
        </form>
        <hr />
        <ul>
          {tasks.map((task) => (
            <TaskContext.Provider key={Math.random()} value={taskContext}> {/* Provide the context */}
              <Task task={task}/>
            </TaskContext.Provider>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App
