import React, { useEffect, useState } from 'react';
import apiClient from '../utils/ApiClient';

const Settings = () => {
    // const [settings, setSettings] = useState([]);

    // useEffect( () => {
    //     apiClient.get('/api/v1/settings/')
    //         .then(response => setSettings(response.data) )
    //         .catch(error => console.error(error));
    // }, []);
    /* <ul>
                {settings.map ( setting => (
                    <li key={setting.id}>{setting.email}</li>
                ))}
            </ul> */

    return (
        <div>
            <h1>Settings Page</h1>
        </div>
    );
};

export default Settings;