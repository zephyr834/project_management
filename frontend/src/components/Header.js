import { Link } from "react-router-dom";
import "../styles/Header.css";
import PathConstants from "../Routing/PathConstants";

export default function Header() {
    return (
        <header>
            <div className="header-div">
                <h1 className="title">
                    <Link to={PathConstants.HOME}>Another PM Tool</Link>
                </h1>
                <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                    <Link to={PathConstants.TASKLIST}>Tasks</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
}
