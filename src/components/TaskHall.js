// src/components/TaskHall.js
import React from 'react';
import './TaskHall.css';

const TaskHall = () => {
    const tasks = [
        { id: 1, commission: '$0.00', status: 'Locked', vip: 'VIP 1' },
        { id: 2, commission: '$1.00', status: 'Unlocked', vip: 'VIP 2' },
        // Add all tasks here
    ];

    return (
        <section className="task-hall">
            {tasks.map(task => (
                <div key={task.id} className="task-item">
                    <img src="task-image-url" alt="Task" />
                    <div className="task-details">
                        <p>Order commission: {task.commission}</p>
                        <p>Status: {task.status}</p>
                        <p>{task.vip}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default TaskHall;
