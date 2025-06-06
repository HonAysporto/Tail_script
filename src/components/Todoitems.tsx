import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id:number, completed:boolean) => void;
    deleteTodo:(id:number)=>void
}

const Todoitems = ({todo, onCompletedChange, deleteTodo}:TodoItemProps) => {


  return (
    <div className="flex items-center gap-1">
        <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
            <input type="checkbox" checked={todo.completed} onChange={(e)=> onCompletedChange(todo.id, e.target.checked)} className="scal-125"/>
            <span className={todo.completed?'line-through text-gray-400':''} >{todo.title}</span>
           
        </label>
        <button onClick={()=>deleteTodo(todo.id)} className="p-2">
          <Trash2 size={20} className="text-gray-500" />
        </button>
    </div>
  )
}

export default Todoitems


