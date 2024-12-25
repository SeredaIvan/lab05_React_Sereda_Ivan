import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from './components/AddTask.jsx';


const App = () => (
    <Router>
        <div style={{ padding: "20px" }}>
            <h1>To-Do</h1>
            <AddTask />

        </div>
    </Router>
);

export default App;
