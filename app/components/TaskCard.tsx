import { BiTrash } from "react-icons/bi";
import { LuEdit } from "react-icons/lu";
import { Task } from "../../models/model";
import { useState } from "react";
import useSound from "use-sound";

// import checked from "../../public/checked.mp3";

interface TaskProp {
  task: Task;
  tasks: Task[];
  setTasks: (task: Task[]) => void;
}

const TaskCard: React.FC<TaskProp> = ({ task, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.title);
  const [play] = useSound("/checked.mp3");

  const handleComplete = (id: number) => {
    // setTasks((tasks.map(task)=>task.id===id?{...todo, isDone:!task.isDone}:task))
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
    play();
  };

  const handleEdit = (e: any, id: number) => {
    if (e.key === "Enter") {
      e.preventDefault();

      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, title: editTask } : task
        )
      );

      setEdit(false);
    }
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex items-center justify-between hover:bg-[#303034] text-zinc-100 text-md py-2.5 px-4 rounded-lg ">
      <div className="flex items-center gap-x-4">
        {/* <input
          type="checkbox"
          onChange={(e) => console.log("hello")}
          className="checkbox appearance-none p-2 bg-green-200"
        /> */}
        <input
          id="default-checkbox"
          type="checkbox"
          //   onChange={(e) => console.log("hello")}
          onChange={() => handleComplete(task.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        ></input>

        {/* for editing  */}
        {/* If edit is true, then input activate else depending on isDone value the task title is printed  */}
        {edit ? (
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            onKeyDown={(e) => handleEdit(e, task.id)}
            className="bg-[#26272B] hover:bg-[#303034] w-96 outline-none rounded"
          />
        ) : task.isDone ? (
          <s>{task.title}</s>
        ) : (
          <p>{task.title}</p>
        )}
      </div>

      <div className="flex gap-x-4">
        <LuEdit
          className="cursor-pointer text-lg text-zinc-500"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
        />

        <BiTrash
          onClick={() => handleDelete(task.id)}
          className="cursor-pointer text-lg text-zinc-500"
        />
      </div>
    </div>
  );
};

export default TaskCard;
