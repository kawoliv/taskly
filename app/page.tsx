"use client";

import { useState, FormEvent } from "react";
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
    {id:3,title:"Apreder Next", completed:true}
  ]);

  const[newTaskTitle, setNewTaskTitle] = useState("");

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? {...task, completed: !task.completed} : task
  )
  );
  }

  function removeTask(id:number){
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function addTask(e: FormEvent){
    e.preventDefault();

    if(!newTaskTitle.trim()) return;

    const newTask: Task ={
      id:Date.now(),
      title:newTaskTitle,
      completed:false, 
  };

  setTasks((prev) => [...prev, newTask]);
  setNewTaskTitle("");
}


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Taskly</h1>
      <p className="text-zinc-500">Organize suas tarefas.</p>
      <form onSubmit={addTask} className="flex gap-2 mt-6">
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
