import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        axios.get('/api/task')
            .then(response => setTasks(response.data) )
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map ( task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;