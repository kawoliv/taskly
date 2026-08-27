import { useState, useEffect } from "react";

export type Task = {
    id:number;
    title:string;
    completed:boolean;
}

const initialTasks: Task[] = [
    {id:1, title:"Aprender React", completed:false},
    {id:2,title:"Apreder TypeScript", completed:true},
    {id:3,title:"Apreder Next", completed:true}
  ];

  export function useTasks() {
    const[tasks,setTasks] = useState<Task[]>(initialTasks);
    const [isLoaded, setIsLoaded] = useState(false);
    
//-------------------------------------------------------------------
    useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if(stored) {
      setTasks(JSON.parse(stored));
    }
    setIsLoaded(true);
  },[]);

  useEffect(() => {
    if(!isLoaded) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);


//-----------------CRIAÇÃO DAS FUNÇÕES--------------------------

  function addTask(title: string){
    const newTask: Task = {id: Date.now(), title, completed:false}
    setTasks((prev) => [...prev, newTask]);
};

function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? {...task, completed: !task.completed} : task
        )
    );
  };

function removeTask(id:number){
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

return { tasks, addTask, toggleTask, removeTask};

  }

