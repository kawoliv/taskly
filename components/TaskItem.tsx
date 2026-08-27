type TaskItemProps = {
    title:string;
    completed:boolean;
    onToggle: () => void;
    onDelete:() => void;
};

export default function TaskItem( {title, completed, onToggle, onDelete}: TaskItemProps){
    return (
        <li 
        onClick={onToggle}
        className="flex items-center gap-2 cursor-pointer"
        >
            <span> {completed ? "✅" : "⬜"} </span>
            <span className={completed ? "line-through text-zinc-400" : ""}>
                {title}
            </span>
            <button onClick={(e) => {
                e.stopPropagation();
                onDelete();
                }
            } className="ml-auto text-red-500 text-sm">
                 excluir 
            </button>

    
        </li>
    );
}