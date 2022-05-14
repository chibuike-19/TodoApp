import { useState } from "react";

const TodoForm = ({onSubmit}) => {
    const [input, setInput] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            id: new Date().getTime(), text: input
        })
        setInput('')
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' className="w-72 py-1 px-3 focus:outline-none rounded-xl text-red-500 border-2 border-blue-500" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="px-3 py-1 border-2 border-white ml-3 rounded-lg focus:outline-none focus:bg-white focus:text-blue-500" disabled={input === ''}>Add Todo</button>
            </form>
        </div>
     );
}
 
export default TodoForm;