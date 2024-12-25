import useTaskStore from "../../store/useTaskStore.js";

const TaskItem = ({ task }) => {
    const toggleTask = useTaskStore((state) => state.toggleTask);
    const removeTask = useTaskStore((state) => state.removeTask);

    return (
        <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
            <div
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
                onClick={() => toggleTask(task.id)}
            >
                {task.text}
            </div>
            <button onClick={() => removeTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
