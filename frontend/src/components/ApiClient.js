import axios from 'axios';

// TODO: Update BaseUrl for production
const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false
});

apiClient.interceptors.request.use(config => {
    // Logic to determine the new baseURL
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        config.baseURL ='http://localhost:8080';    
    }

    return config;
});

export default apiClient;