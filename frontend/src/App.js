import React from 'react';
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import Page404 from './Pages/Page404';
import routePaths from './Routing/RoutePaths';

    
const App = () => {
    // initialize a browser router
    const router = createBrowserRouter([
        {
            element: <Layout />, // parent route component
            errorElement: <Page404 />,
            children: routePaths
        },
    ])

    return ( 
        <RouterProvider router={router} />
    );
    
}

export default App;