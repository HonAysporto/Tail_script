import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void
}

const AddTodoForm = ({onSubmit}:AddTodoFormProps) => {
    const [input, setinput] = useState('')

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

            onSubmit(input);
            setinput('')
        
    }


  return (
   <form className="flex" onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setinput(e.target.value)} value={input} placeholder="What needs to be done?" className="rounded-s-md grow border border-gray-400 p-2"/>
        <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">Add</button>
   </form>
  )
}

export default AddTodoForm