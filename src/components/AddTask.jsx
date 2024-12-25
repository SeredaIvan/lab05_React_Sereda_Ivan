import { useState } from "react";
import useTaskStore from "../store/useTaskStore.js";

const AddTask = () => {
    const [task, setTask] = useState("");
    const addTask = useTaskStore((state) => state.addTask);

    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task);
            setTask("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
