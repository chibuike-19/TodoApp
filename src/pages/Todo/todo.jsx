import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const TodoApp = () => {
    const location = useLocation()
    const [name, setname] = useState(location.state.displayName)
    const [uid, setUid] = useState(location.state.uid)
    const [todos, setTodos] = useState([])


    const getName = async () => {
        const docSnap = await getDoc(doc(db, "users", uid));

        if (docSnap.exists()) {
        console.log(docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }

    const onSubmit = (todo) => {
        setTodos([todo, ...todos])
    }
    

    const deleteTodo = (tod) => {
        const updateTodo = [...todos].filter(todo => {
            return todo.id !== tod
        })
        setTodos(updateTodo);
    }

    
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-200">
            <span className="text-3xl text-white m-2">Welcome {name ? `${name}!`: ''} </span><br />
            <div className="flex text-white text-xl items-center justify-center w-full  border-2 min-h-screen">
            <div className="flex flex-col">
                <TodoForm onSubmit={onSubmit} /> 
                <TodoList list={todos} deleteTodo={deleteTodo}  />
            </div>
            
            
        </div> 
    
        </div>
        
    );
}
 
export default TodoApp;