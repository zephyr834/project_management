import logo from './logo.svg';
import './App.css';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <ProjectList />
      <TaskList />
    </div>
  );
}

export default App;
