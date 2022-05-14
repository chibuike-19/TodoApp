import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import TodoApp from './pages/Todo/todo';
import { useState } from 'react';
import ResetPassword from './pages/login/resetPasword';
import SignUp from './pages/sign-up/sign-up';

const App = () => {
    const [user, setUser] = useState(localStorage.getItem('user') || false)

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home setUser={setUser}/>}/>
                <Route path='sign-up' element={<SignUp setUser={setUser}/>}/>
                <Route path='reset-password' element={<ResetPassword/>}/>
                {user && <Route path='todo' element={<TodoApp/>}/>}
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;