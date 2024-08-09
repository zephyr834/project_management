import React, { useEffect, useState } from 'react';
import apiClient from '../components/ApiClient';

const TaskList = () => {
    // const [tasks, setTasks] = useState([]);

    // useEffect( () => {
    //     apiClient.get('/api/v1/tasks/')
    //         .then(response => setTasks(response.data) )
    //         .catch(error => console.error(error));
    // }, []);
    /* <ul>
                {tasks.map ( task => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul> */

    return (
        <div>
            <h1>Tasks</h1>
        </div>
    );
};

export default TaskList;