import React, { Fragment, useContext } from 'react'
import LogoRSA from '../img/LogoProyectoRS.png'
import { Link } from 'react-router-dom';

import useForm from '../hooks/useForm';

import UserContext from '../contexts/UserContext';
import { Toaster } from 'react-hot-toast';

const Login = () => {
    const { login } = useContext(UserContext);
    const [data, handleChange] = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(data);       
    }

    return (
        <Fragment>
            <Toaster />
            <div className='w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
              <div className='w-full sm:max-w-md p-5 mx-auto'>
              <h2 className="mb-6 text-center text-3xl font-semibold">Bienvenido a R.S.App</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <img className="m-auto my-1" src={LogoRSA} alt="LogoRSApp" width="200px" height="100px"/>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                            Ingrese su correo electronico
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name='correo' id='correo' type="mail" placeholder="Ingrese su correo" onChange={handleChange} required/>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        type="password" name='contraseña' id='contraseña' placeholder="******************" onChange={handleChange} required/>
                        <Link to="/recuperar-pass"><span className='text-black hover:text-blue-700'>¿Olvidaste tu contraseña?</span></Link>
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit">
                           Ingresar
                        </button>
                    </div>
                </form>
             </div>  
            </div>            
        </Fragment>
    )
}

export default Login
