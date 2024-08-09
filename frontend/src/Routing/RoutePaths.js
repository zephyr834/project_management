import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy( () => import("../Pages/Home") );
const TaskList = React.lazy( () => import("../Pages/TaskList") );

const routePaths = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.TASKLIST, element: <TaskList /> },
]

export default routePaths;