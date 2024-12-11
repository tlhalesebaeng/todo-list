import './Task.css';

export default function Task({ title }) {
    return (
        <div className='task'>
            <input className='task-checkbox' type='checkbox' />
            <div className='task-title-container'>
                <p className='task-title'>{title}</p>
            </div>
        </div>
    );
}