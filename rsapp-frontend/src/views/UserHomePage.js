import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../layouts/Header"
// import styles from '../styles/grid.module.scss'
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
                <section className="pt-5 lg:pt-[120px] pb-3 lg:pb-5 bg-[#F3F4F6] m-4">
                    <div className="container">
                        <div className="flex flex-wrap mx-2">
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                            <Link to="/rsapp/servicios-items">
                                <div className="bg-white rounded-lg overflow-hidden mb-5">
                                <img src={ItemsIMG} alt="items" className="w-full"/>
                                    <div className="p-5 sm:p-9 md:p-7 xl:p-9 text-center">
                                        <p className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl 
                                        lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                                        Amenidades hoteleras </p>
                                        <p className="text-base text-body-color leading-relaxed mb-5">
                                            Objetos que el hotel pone a disposición del huésped para su estancia
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                            <Link to="/rsapp/servicios-limpieza">
                                <div className="bg-white rounded-lg overflow-hidden mb-5">
                                <img src={LimpiezaIMG} alt="limpieza" className="w-full" />
                                    <div className="p-5 sm:p-9 md:p-7 xl:p-9 text-center">
                                        <p className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl 
                                        lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary ">
                                        Servicio de limpieza </p>
                                        <p className="text-base text-body-color leading-relaxed mb-5">
                                        Solicite un servicio de limpieza 
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                            <Link to="/rsapp/recomendaciones">
                                <div className="bg-white rounded-lg overflow-hidden mb-5">
                                <img src={RecomIMG} alt="Recomendaciones" className="w-full" />
                                    <div className="p-5 sm:p-9 md:p-7 xl:p-9 text-center">
                                        <p className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px]
                                        xl:text-xl 2xl:text-[22px] mb-2 block hover:text-primary ">
                                        Lugares recomendados </p>
                                        <p className="text-base text-body-color leading-relaxed mb-5">
                                            Pase un buen rato en alguno de estos lugares cerca de su zona
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </section>
            
                <Link to="/rsapp/servicios-reportar"> 
                    <div className="text-center text-3xl font-semibold"> 
                        Reportar 
                    </div> 
                </Link>

            </main>
        </>
    )
}

export default Homepage
