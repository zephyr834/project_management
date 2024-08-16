import { Link } from "react-router-dom";
import "../styles/Header.css";
import PathConstants from "../Routing/PathConstants";

export default function Header() {
    return (
        <header>
            <div class="h-20 flex items-center justify-between bg-gray-800">
                <h1 class="text-white text-xl font-bold header-div">
                    <Link to={PathConstants.HOME}>Another PM Tool</Link>
                </h1>
                <nav class="text-white font-bold">
                    <Link to={PathConstants.TASKLIST} class="m-8 p-8">Tasks</Link>
                </nav>
            </div>
        </header>
    );
}
