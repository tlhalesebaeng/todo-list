import { useRef, useState } from 'react';

import './App.css'
import Task from './components/Task';

function App() {
  const taskTitle = useRef();
  const [tasks, updateTasks] = useState([]);

  function handleAddTask(event){
    event.preventDefault();
    const title = taskTitle.current.value;

    const newTasks = tasks.slice();
    newTasks.push(title);
    updateTasks(newTasks);
    taskTitle.current.value = '';

    event.target.reset();
  }

  return (
    <main>
      <section>
        <h1 className='app-title'>To Do App</h1>
        <form className='add-task-container' onSubmit={handleAddTask}>
          <input 
            type='text' 
            placeholder='Task title' 
            ref={taskTitle} 
            required
          />
          <button type='submit'>+</button>
        </form>
        <hr />
        {tasks.map((title) => (
          <Task key={Math.random()} title={title}/>
        ))}
      </section>
    </main>
  );
}

export default App
