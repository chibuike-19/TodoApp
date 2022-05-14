import Login from '../login/Login'

import './home.css'

const Home = ({setUser}) => {

    return (
        <div className=' w-full'>
            <Login setUser={setUser}/>
            
        </div>
    );
}
 
export default Home;