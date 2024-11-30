'use client'
import { createTodos } from "@/actions";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = async () => { // Make this function async
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
      await createTodos(task); // Await the createTodos function to ensure it completes
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow p-2 border border-gray-300 rounded-l"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 rounded-r"
          >
            Add
          </button>
        </div>
        <ul className="list-disc pl-5">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 bg-white p-2 rounded shadow"
            >
              {t}
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white px-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
