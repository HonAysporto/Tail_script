import { Route, Routes } from "react-router-dom"
import Todo from "./pages/Todo"
import Signup from "./pages/Signup"
import Tailwind from "./pages/Tailwind"
import Signin from "./pages/Signin"





function App() {

  
  return (
    <Routes>
       <Route path='/dashboard' element={<Todo/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/signin" element={<Signin/>}/>
       <Route path="/tailwind" element={<Tailwind/>}/>
    </Routes>
  )
}

export default App
