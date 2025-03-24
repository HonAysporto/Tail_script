import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"
import { dummydata } from "./data/todos"
import { useState } from "react"




function App() {

  const [todos, settodos] = useState(dummydata)

  function setTodoComplected(id:number, completed:boolean) {
      settodos((prevTodos)=> 
        prevTodos.map(todo => (
          todo.id === id ? {...todo, completed} : todo
        )))
  }

  function deleteTodo(id:number) {
    settodos((prevTodos) => prevTodos.filter((element) => element.id !== id));
  }

  function addTodo(title:string) {
    settodos(prevTodos => [
      {
        id: prevTodos.length + 1, 
        title,
        completed:false
      },
      ...prevTodos
    ])
  }

  return (
<main className="py-8 h-screen space-y-5">
    <h1 className="font-bold text-3xl text-center">Your Todos</h1>
    <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
      <AddTodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} onCompletedChange={setTodoComplected} onDelete={deleteTodo}/>
    </div>
</main>
  )
}

export default App
