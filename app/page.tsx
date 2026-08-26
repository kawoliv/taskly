"use client";

import { useState } from "react";
import TaskItem from "@/components/TaskItem";

type Task = {
  id:number;
  title:string;
  completed:boolean;
};

export default function Home() {
  const [tasks,setTasks] = useState<Task[]>([
    {id:1, title:"Aprender React", completed:false},
    {id:2,title:"Apreder TypeScript", completed:true},
  ]);

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? {...task, completed: !task.completed} : task
  )
  );
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Taskly</h1>
      <p className="text-zinc-500">Organize suas tarefas.</p>
      <ul className="mt-6 flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskItem
          key={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={() => toggleTask(task.id)}
          />
        ))}
      </ul>
    </main>
  );
}
