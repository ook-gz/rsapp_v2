//importamos el createContext y useState
import React ,{ createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import jwt_decode from "jwt-decode";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    let navigate = useNavigate()
    
    const redirect = () => {
        navigate("/rsapp");
    }


    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null);

    const login = async(formData) => {
        try {
            const data = await fetch('http://localhost:3005/',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        const res = await data.json();
        const {Token, errors} = res;
        
        if (!errors) {
            setToken(Token);
            localStorage.setItem("user", JSON.stringify(Token));

            toast.success(() => (
                <span>
                  <b>Bienvenido a RSApp</b>
                </span>)
                );

            const session = localStorage.getItem("user");
            if(session){
               const userSession = JSON.parse(session);
               const decoded = jwt_decode(userSession);
               setUser(decoded)
            }
            
            redirect();
        }else{
            if(errors[0]){
                toast.error(errors[0].msg);
            }else{
                toast.error(errors);
            }
        }       

        } catch (error) {
           console.log(error);
        }
    };
    
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <UserContext.Provider value={{user, login, logout, token}}>
            {children}
        </UserContext.Provider>
    )
}

//exportamos el contexto y provider
export default UserContext;
export { UserProvider };