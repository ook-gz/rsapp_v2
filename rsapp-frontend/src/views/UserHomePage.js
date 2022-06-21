import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../layouts/Header"
import ItemsIMG from '../img/Items.png'
import LimpiezaIMG from '../img/Limpieza.png'
import RecomIMG from '../img/Recomendacion.png'

const Homepage = () => {
    useEffect(() => {
        document.title="R.S.App | Home"
    }, []);

    return (
        <>
        <Header/>
        <main>
            <h1 className="text-center text-3xl font-semibold">Estamos a su servicio</h1>

            <div className="container px-4 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <Link className="p-4 md:w-1/3" to="/rsapp/servicios-items">
                        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"> 
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={ItemsIMG} alt="blog"/>
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Amenidades hoteleras</h1>
                                    <p className="leading-relaxed mb-3">
                                        Objetos que el hotel pone a disposición del huésped para su estancia.
                                    </p>
                                </div>
                            </div>
                    </Link>
                    <Link className="p-4 md:w-1/3" to="/rsapp/servicios-limpieza">
                        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"> 
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 
                            transition-all duration-400 hover:scale-100" src={LimpiezaIMG} alt="blog"/>
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-600 mb-3"> Servicio de limpieza</h1>
                                <p className="leading-relaxed mb-3">
                                    Solicite un servicio de limpieza.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link className="p-4 md:w-1/3" to="/rsapp/recomendaciones">
                        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r 
                        from-indigo-50 to-blue-50 overflow-hidden"> 
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 
                            transition-all duration-400 hover:scale-100" src={RecomIMG} alt="blog"/>
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Lugares recomendados</h1>
                                <p className="leading-relaxed mb-3">
                                    Pase un buen rato en alguno de estos lugares cerca de su zona
                                </p>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>

                <div className="w-full bg-blue-600 shadow-xl shadow-indigo-200 py-6 px-20 flex justify-between items-center">
                    <p className="text-white"> 
                        <span className="text-4xl font-medium">¿Tiene algun incoveniente? </span> 
                        <span className="text-lg">Reportelo</span>
                    </p>
                    <Link to="/rsapp/servicios-reportar"> 
                    <button className="px-5 py-3 font-medium text-slate-700 shadow-xl rounded  
                    hover:bg-white duration-150 bg-yellow-400 ">Formulario de quejas</button>
                    </Link>
                </div>
                

            </main>
        </>
    )
}

export default Homepage
