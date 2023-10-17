import './Task.css';

import React from 'react';

const Task = () => {
    return (
        <div className='task-wrapper'>
           <div className='task-inner-wrapper'>
           <p className='task-name'>test task</p>
            <button className='btn-done'>Done</button>
            <button className='btn-delete'>delete</button>
           </div>
        </div>
    );
};

export default Task;