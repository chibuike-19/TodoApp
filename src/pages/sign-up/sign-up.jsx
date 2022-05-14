 import { createUserWithEmailAndPassword } from "firebase/auth";
 import { auth , db} from '../../firebase'
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

const SignUp = ({setUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    let navigate = useNavigate()

    const signUpUser = async(e) => {
        e.preventDefault()
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, 'user', response.user.uid), {
            displayName: displayName,
            email: email,
            password: password,
            timestamp: serverTimestamp()

        })
        setUser(localStorage.setItem('user', response.user.uid))
        navigate('/todo', {state: {displayName}})
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        }
        
    }

        return (
            <div className="relative min-h-screen border-2 w-full bg-gradient-to-r from-white to-blue-300">
                <div className=' absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                    <form onSubmit={signUpUser}>
                        <p className="text-center mb-4 text-4xl">Sign Up</p>
                        <label className="mr-2 font-roboto">Tell us your name</label> <br />
                        <input className='w-72 h-9 py-1 rounded-md px-2 border-2 border-blue-600 focus:shadow-xl focus:outline-none mb-4' type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/> <br />
                        <label className="mr-2 font-roboto">Enter your Email</label> <br />
                        <input className='w-72 h-9 py-1 rounded-md px-2 border-2 border-blue-600 focus:outline-none focus:shadow-xl mb-4 ' type='email' onChange={(e) => setEmail(e.target.value)}/> <br />
                        <label className="mr-2 font-roboto">Enter your password</label> <br />
                        <input className='w-72 h-9 py-1 rounded-md px-2 border-2 border-blue-600 focus:outline-none focus:shadow-xl mb-4 ' type='password' onChange={(e) => setPassword(e.target.value)}/> <br />
                        <button className="border-2 text-white border-blue-500 px-5 py-1 rounded-lg bg-blue-800">Sign Up</button>

                    </form>
                </div>
            </div>
           
        );
}
 
export default SignUp;