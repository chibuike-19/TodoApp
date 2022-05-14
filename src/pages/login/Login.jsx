import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Login = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uid, setUid] = useState('')
    let navigate = useNavigate();

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  setUid(user.uid)
                  setUser(localStorage.setItem('user', user))
                  navigate('/todo', {state: {uid}})
                  console.log(user.uid)
                  // ...
                })
                
        } catch (error) {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        }
            
    }



    return (
        <div className='relative border-2 min-h-screen cover-photo w-full'>
            <div className='flex flex-col transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 '>
                <form onSubmit={onLogin} className="text-white">
                    <h1 className='text-5xl font-bold font-fira text-center hover:rotate-6 mb-6 hover:cursor-none '>Welcome to My TodoApp</h1>
                    <h1 className='text-4xl font-fira text-center mb-6'>Sign In</h1>
                    <label className='text-lg mr-2 font-fira'>Email</label> <br />
                    <input className='w-72 h-9 focus:outline-none focus:shadow-xl rounded-md px-2 border-2 text-red-500 border-blue-600 ' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
                    <label className='mt-8 mr-2'>Password</label><br />
                    <input className='w-72 h-9 text-red-500 rounded-md px-2 border-2 focus:shadow-xl focus:outline-none border-blue-600 ' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
                    <button type='submit' className="border-2 mt-2 border-white text-blue-800 hover:text-white hover:bg-blue-800 px-5 py-1 rounded-lg bg-white ">Sign In</button>
                </form>
                <button onClick={signInWithGoogle} className='text-blue-800 underline w-40 mt-2'>Sign In with Google</button>
                <Link to='/reset-password' className='text-blue-900 underline mt-1'>forgot password? </Link>
                <span className='text-white '>Don't have an acount? <Link to='/sign-up' className='text-blue-900 underline'>Sign up</Link> now</span>
            </div>
        </div>
        
    );
}
 
export default Login;