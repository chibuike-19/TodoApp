import { useState, useEffect } from "react";
import { logout } from "../../firebase";

const TodoList = ({list, deleteTodo}) => {
    const [edit, setEdit] = useState(null);
    const [editText, setEditText] = useState('')


    const editTodo = (tod) => {
        const editedTodo = [...list].map(todo => {
            if(todo.id === tod){
                todo.text = editText
            }
        })
        list = editedTodo
        setEdit(null)
        setEditText('')
    }
    
    return ( 
        <div className="mt-4">
            {list.map(todo => {
                return (
                    <ul key={todo.id}>
                        <li>{todo.text}</li>
                        {(todo.id === edit) ? (
                            <><input type='text'className="w-72 rounded-lg focus:outline-none h-9 py-1 px-3  text-red-500" onChange= {(e) => setEditText(e.target.value)}/>
                            <button className="border-2 focus:outline-none focus:bg-white focus:text-blue-500  ml-2 border-white px-3 py-1 rounded-lg" disabled={editText === ''}  onClick={() => editTodo(edit)}>Submit Edit</button></>
                        ): (<>
                        <button className="border-2 focus:outline-none focus:bg-white focus:text-blue-500 rounded-lg border-white px-3 py-1 my-2"  onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button  className="border-2 focus:outline-none focus:bg-white focus:text-blue-500 rounded-lg ml-2 border-white px-3 py-1" onClick={() => setEdit(todo.id)}>Edit</button></>)}
                        
                    </ul>
                )
            })}
            <button onClick={logout}>Log out</button>
        </div>
    );
}
 
export default TodoList;