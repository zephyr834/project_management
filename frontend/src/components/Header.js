import { Link } from "react-router-dom";
import PathConstants from "../routing/PathConstants";

export default function Header() {
    return (
        <header>
            <div className="h-20 flex items-center justify-between bg-gray-800">
                <h1>
                    <Link className="text-white text-xl font-bold p-8" to={PathConstants.HOME}>Another PM Tool</Link>
                </h1>
                <nav>
                    <Link className="text-white text-xl font-bold p-8" to={PathConstants.SETTINGS}>Settings</Link>
                </nav>
            </div>
        </header>
    );
}
