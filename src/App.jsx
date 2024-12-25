import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from './components/addTask/AddTask.jsx';
import TaskList from './components/taskList/TaskList.jsx';


const App = () => (
    <Router>
        <div style={{ padding: "20px" }}>
            <h1>To-Do</h1>
            <AddTask />
            <TaskList/>
        </div>
    </Router>
);

export default App;
