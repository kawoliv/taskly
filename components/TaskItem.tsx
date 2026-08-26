type TaskItemProps = {
    title:string;
    completed:boolean;
    onToggle: () => void;
};

export default function TaskItem( {title, completed, onToggle}: TaskItemProps){
    return (
        <li 
        onClick={onToggle}
        className="flex items-center gap-2 cursor-pointer"
        >
            <span> {completed ? "✅" : "⬜"} </span>
            <span className={completed ? "line-through text-zinc-400" : ""}>
                {title}
            </span>
        </li>
    );
}