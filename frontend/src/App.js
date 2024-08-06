import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import Home from './components/Header/Home'

class App extends Component {
    render () {
        return (
            <div>
                {/* <Router>
                    <div>
                        <Header />
                        <Routes>
                            <Route path="/" element={ <Home/> } />
                            <Route path="/projects" element={ <ProjectList /> } />
                        </Routes>
                    </div>
                </Router> */}
                {/* <ProjectList /> */}
                <TaskList />
            </div>
        );
    };
};

export default App;
