import { useState } from "react";
import { sendPasswordReset } from '../../firebase';

const ResetPassword = () => {
    const [email, setEmail] = useState('')

    return (
        <div className="flex flex-col items-center justify-center min-h-screen cover-photo">
            <label className="text-2xl">
                Enter Your Email
            </label>
            <input className="w-72 h-9 rounded-lg border-2 focus:outline-none focus:shadow-xl px-2 py-1 border-blue-500" type='email' onChange={(e) => setEmail(e.target.value)}/>
            <button className="border-2 border-blue-500 px-3 py-1 bg-blue-500 mt-3 rounded-md  " onClick={() => sendPasswordReset(email)}>Submit</button>
        </div>
    ) ;
}
 
export default ResetPassword;