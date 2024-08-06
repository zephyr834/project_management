import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import "../styles/Header.css";

const Header = () => {
    const [projects, setProjects] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        axios.get('/api/projects')
            .then(response => setProjects(response.data) )
            .catch(error => console.error(error) );
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    if (!projects) return null;

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        Projects
                        {dropdownOpen && (
                            <ul>
                                {projects.map( project => (
                                    <li key={projects.id}>
                                        <Link to={`/projects/${project.id}`}>{project.name}</Link>
                                    </li>
                                ))}                              
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            <style jsx>{`
                nav ul {
                    list-style: none;
                    padding: 0;
                }
                nav ul > li {
                    display: inline;
                    margin-right: 10px;
                    position: relative;
                }
                nav ul > li > ul {
                    display: block;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: white;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                nav ul > li > ul > li {
                    margin: 0;
                }
            `}</style>
        </header>
    );
};

export default Header;