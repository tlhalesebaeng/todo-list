import './App.css'
import Task from './components/Task';

const TASKS = [
  'Just a demo task'
]

function App() {
  return (
    <main>
      <section>
        <h1 className='app-title'>To Do App</h1>
        <div className='add-task-container'>
          <input type='text' placeholder='Task title'/>
          <button>+</button>
        </div>
        <hr />
        {TASKS.map((title) => (
          <Task key={Math.random()} title={title}/>
        ))}
      </section>
    </main>
  );
}

export default App
