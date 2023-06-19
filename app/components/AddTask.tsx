"use client";

import { useState } from "react";

interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleKeyDown: (e: any) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ task, setTask, handleKeyDown }) => {
  // const AddTask = ({ task, setTask }: AddTaskProps) => {
  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="How's your day looking?"
        className="flex mx-auto w-full px-4 py-2.5 rounded-lg bg-[#19181A] placeholder-[#71707B] text-[#EBE2FE] outline-0 "
      />
    </div>
  );
};

export default AddTask;
