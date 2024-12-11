import { useRef, useState } from 'react';

import './App.css'
import Task from './components/Task';

const TASKS = [
  'Just a demo task'
]

function App() {
  const taskTitle = useRef();
  const [tasks, updateTasks] = useState(TASKS);

  function handleAddTask(){
    const title = taskTitle.current.value;
    if(title === ''){
      //show some error
      return;
    }

    const newTasks = tasks.slice();
    newTasks.push(title);
    updateTasks(newTasks);
  }

  return (
    <main>
      <section>
        <h1 className='app-title'>To Do App</h1>
        <div className='add-task-container'>
          <input 
            type='text' 
            placeholder='Task title' 
            ref={taskTitle}
          />
          <button onClick={handleAddTask}>+</button>
        </div>
        <hr />
        {tasks.map((title) => (
          <Task key={Math.random()} title={title}/>
        ))}
      </section>
    </main>
  );
}

export default App
