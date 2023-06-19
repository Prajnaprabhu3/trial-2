import { Task } from "../../models/model";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
