import useTaskStore from "../../store/useTaskStore.js";
import TaskItem from "../taskItem/TaskItem.jsx";

const TaskList = () => {
    const tasks = useTaskStore((state) => state.tasks);

    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map((task) => <TaskItem key={task.id} task={task} />)
            ) : (
                <p>No tasks</p>
            )}
        </div>
    );
};

export default TaskList;
