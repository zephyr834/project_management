import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy( () => import("../Pages/Home") );
const Settings = React.lazy( () => import("../Pages/Settings") );

const routePaths = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.SETTINGS, element: <Settings /> },
]

export default routePaths;