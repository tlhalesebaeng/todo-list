import { useContext } from 'react';

import { TaskContext } from '../store/tasks-context';
import './Task.css';
import binImg from '../assets/bin.png';

export default function Task({ task }) {
    const { tasks, removeTask } = useContext(TaskContext); //consume the context
    console.log(tasks);

    return (
        <div className='task'>
            <input className='task-checkbox' type='checkbox' />
            <div className='task-title-container'>
                <p className='task-title'>{task.title}</p>
            </div>
            <img onClick={() => removeTask(task.id)} src={binImg} alt='delete'/>
        </div>
    );
}