import { useEffect, useState } from "react"
import { Todo } from "../types/todo"
import { dummydata } from "../data/todos"

export default function useTodos() {
    const [todos, settodos] = useState(() => {
        const savedTodos:Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')
        return savedTodos.length > 0 ? savedTodos : dummydata
      })
    
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    
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
            id: Date.now(), 
            title,
            completed:false
          },
          ...prevTodos
        ])
      }
    
      function deleteAllCompletedTodos() {
        settodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
      }

      return {
        todos,
        setTodoComplected,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos
      }
    
}