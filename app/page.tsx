"use client";

import { useState, useEffect,FormEvent } from "react";
import TaskItem from "@/components/TaskItem";
import { useTasks } from "@/hooks/useTasks";

export default function Home() {

  const {tasks,addTask,toggleTask,removeTask} = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    addTask(newTaskTitle);
    setNewTaskTitle("")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Taskly</h1>
      <p className="text-zinc-500">Organize suas tarefas.</p>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-6">
        <input type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Nova Tarefa"
        className="border rounded px-3 py-2"
         />
         <button type="submit" className="bg-black text-white px-4 py-1 rounded">
          Adicionar
         </button>
      </form>

      <ul className="mt-6 flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskItem
          key={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={() => toggleTask(task.id)}
          onDelete={() => removeTask(task.id)}
          />
        ))}
      </ul>
    </main>
  );
}
