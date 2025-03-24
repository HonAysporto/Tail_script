import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id:number, completed:boolean) => void;
    deleteTodo:(id:number)=>void
}

const Todoitems = ({todo, onCompletedChange, deleteTodo}:TodoItemProps) => {



  return (
    <div>
        <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
            <input type="checkbox" checked={todo.completed} onChange={(e)=> onCompletedChange(todo.id, e.target.checked)} className="scal-125"/>
            <span className={todo.completed?'line-through text-gray-400':''} >{todo.title}</span>
            <button onClick={()=>deleteTodo(todo.id)} className="border px-2 rounded-full bg-red-500 text-white hover:bg-red-400">X</button>
        </label>
    </div>
  )
}

export default Todoitems


