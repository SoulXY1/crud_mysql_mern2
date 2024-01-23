import { useEffect} from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TaskPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

function renderMain() {
    if (tasks.length === 0) return <h1>No task yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
}

  return (
    <div>
      <h1>Task</h1>
      {renderMain()}
    </div>
  );
}

export default TaskPage;
