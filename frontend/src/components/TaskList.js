import React, { useEffect, useState } from 'react';
import apiClient from './ApiClient';
// import axios from 'axios';

// const apiClient = axios.create({
//     baseURL: "http://localhost:8080",
//     withCredentials: false
//   });

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        apiClient.get('/api/v1/tasks/')
            .then(response => setTasks(response.data) )
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map ( task => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;