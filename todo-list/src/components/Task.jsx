import { useContext, useState } from 'react';

import { TaskContext } from '../store/tasks-context';
import './Task.css';
import binImg from '../assets/bin.png';

export default function Task({ task }) {
    const { removeTask } = useContext(TaskContext); //consume the context
    const [completed, updateCompleted] = useState(false);

    return (
        <li className="task">
            <input
                title="mark as done"
                onClick={() => updateCompleted((prevState) => !prevState)}
                className="task-checkbox"
                type="checkbox"
                aria-label="task-checkbox"
            />
            <div className="task-title-container">
                <p className="task-title">{task.title}</p>
            </div>
            <div className="task-bin">
                {!completed && (
                    <img
                        title="delete task"
                        onClick={() => removeTask(task.id)}
                        src={binImg}
                        alt="delete"
                    />
                )}
            </div>
        </li>
    );
}
