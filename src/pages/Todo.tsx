import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"
import TodoSummary from "../components/TodoSummary"
import useTodos from "../hooks/useTodos"


const Todo = () => {
    const {todos, addTodo, setTodoComplected, deleteTodo, deleteAllCompletedTodos} = useTodos()



  return (
   <main className="py-8 h-screen space-y-5 overflow-y-auto">
       <h1 className="font-bold text-3xl text-center">Your Todos</h1>
       <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
         <AddTodoForm onSubmit={addTodo}/>
         <TodoList todos={todos} onCompletedChange={setTodoComplected} onDelete={deleteTodo}/>
       </div>
       <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>
   </main>
  )
}

export default Todo