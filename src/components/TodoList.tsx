import { Todo } from "../types/todo"
import Todoitems from "./Todoitems"
interface TodoListProps {
    todos: Todo[];
    onCompletedChange:(id:number, completed:boolean)=> void
    onDelete: (id:number) => void
}


const TodoList = ({todos, onCompletedChange, onDelete}:TodoListProps) => {
    const todosSorted = todos.sort((a,b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1
    })
  return (
    <>
    <div className="space-y-2">
    {todosSorted.map(todo => (
     <Todoitems key={todo.id} todo={todo} onCompletedChange={onCompletedChange} deleteTodo={onDelete}/>
    ))}
  </div>
  {todos.length === 0 && (
    <p className="text-center text-sm text-gray-500">
      No todos yet. Add a new one above.
    </p>
  )}
  </>
  )
}

export default TodoList