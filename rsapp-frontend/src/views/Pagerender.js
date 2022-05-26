import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const Pagerender = () => {
    // hacemos uso del contexto
    // const { user } = useContext(UserContext);
    //
   
    //En caso de que no haya un usuario rediriga al login
    // if (!user) return <Navigate to="/" />;

    // const session = localStorage.getItem("user");
    // if(!session){
    //     return <Navigate to="/" />;
    // }
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default Pagerender
