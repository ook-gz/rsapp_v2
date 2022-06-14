import { Link } from "react-router-dom";
import LogoRSApp from '../img/LogoProyectoRS.png';
//importamos el contexto y su herramienta para usarlo
import { Fragment, useContext } from "react";
import UserContext from '../contexts/UserContext';

// Creamos el componente
const Header = () => {
    // hacemos uso del contexto
    const { user, logout } = useContext(UserContext);

    const menunav =  document.querySelector(".navbar-menu");

    return (
      <Fragment>
        <nav className="relative px-4 py-5 flex justify-between items-center bg-white">
          <Link to="/rsapp" className="mr-auto text-3xl font-bold leading-none">
            <img src={LogoRSApp} alt="LogoRSA" width="230px" height="80px" />
          </Link>  
          {/* boton menú hamburguesa */}
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3" 
            onClick={ () => {menunav.style.display = "block"} }>
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex 
          lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link to="/rsapp" className="text-base font-bold hover:text-blue-600">
                Inicio
              </Link>
            </li>
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li>
              <Link to="/rsapp/contacto" className="text-base font-bold hover:text-blue-600">
                Contacto
              </Link>
            </li>
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li>
              <Link to="/rsapp/info" className="text-base font-bold hover:text-blue-600">
                Info
              </Link>
            </li>
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li>
              <Link to="/rsapp/clima-info" className="text-base font-bold hover:text-blue-600">
                Clima
              </Link>
            </li>
           
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
          </ul>
          <Link to="/rsapp/huesped-info" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 rounded hover:bg-gray-100 
          text-base text-gray-900 font-bold transition duration-200">
            {user.nombre}
          </Link>
          <button className="hidden lg:inline-block  py-2 px-6 bg-red-600 rounded hover:bg-red-700
          text-base text-white font-bold transition duration-200 " onClick={logout}>
            Salir
          </button>
        </nav>
        {/* Menú para movil */}
        <div className="navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link to="/rsapp" className="mr-auto text-3xl font-bold leading-none">
                      <img src={LogoRSApp} alt="LogoRSA" width="230px" height="80px" />
              </Link>  
              <button className="navbar-close" onClick={ () => {menunav.style.display = "none"} }>
                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                <Link to="/rsapp" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Inicio
                </Link>
                </li>
                <li className="mb-1">
                  <Link to="/rsapp/contacto" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Contacto
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/rsapp/info" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Info
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <Link to="" className="block px-4 py-3 mb-3 leading-loose text-xs text-center 
                font-semibold leading-none bg-gray-50 rounded-xl hover:bg-gray-100" href="#">
                  {user.nombre}
                </Link>
                <button className="block px-4 py-3 mb-2 leading-loose text-xs text-center 
                text-white font-semibold bg-red-600 rounded-xl hover:bg-red-700" onClick={logout}>
                  Salir
                </button>
              </div>
            </div>
          </nav>
        </div>
      </Fragment>
    )
}

export default Header
