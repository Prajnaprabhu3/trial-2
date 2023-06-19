"use client";

import { useState, useEffect } from "react";
import useSound from "use-sound";
import { VscUnmute, VscMute, VscTasklist } from "react-icons/vsc";
import Image from "next/image";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

// task model import
import { Task } from "../models/model";

// import sound
// import checked from "../public/checked.mp3";

// export default async function Home() {
const Home: React.FC = () => {
  const [audio, setAudio] = useState(true);
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter") {
      // 👇 Get input value
      e.preventDefault();

      if (task) {
        setTasks([...tasks, { id: Date.now(), title: task, isDone: false }]);

        setTask("");
      }

      // router.refresh();
    }
  };

  // console.log(tasks);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#19181A]">
      <div className="flex flex-col gap-y-10 bg-[#26272B] p-10 rounded-xl h-fit w-1/2 drop-shadow-lg">
        {/* <Navbar audio={audio} setAudio={setAudio} /> */}

        <div className="flex justify-between items-center">
          <Image src="/note.png" alt="notes" width="100" height="100" />

          {audio ? (
            <VscUnmute
              className="text-[#5d5c5e] text-4xl cursor-pointer"
              onClick={() => setAudio(!audio)}
            />
          ) : (
            <VscMute
              className="text-[#5d5c5e] text-4xl cursor-pointer"
              onClick={() => setAudio(!audio)}
            />
          )}
        </div>

        <AddTask task={task} setTask={setTask} handleKeyDown={handleKeyDown} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
};

export default Home;

// 1:07 drag

// have given inline path of file instead of import - fix it
// https://github.com/vercel/next.js/discussions/12810
