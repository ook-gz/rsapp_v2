import { useEffect } from "react";
import Header from "../layouts/Header"
import LogoRSApp from '../img/LogoProyectoRS.png';
import Breadcrumb from "../components/client/Breadcrumbs";


const Info = () => {
    useEffect(() => {
        document.title="R.S.App | Info"
    }, []);
    return (
        <>
            <Header />
            <Breadcrumb crumbs="Info"/>
            <h1 className="text-xl text-center"><b>Info sobre el proyecto</b></h1>
            <section className="grid gap-5 grid-cols-2 place-content-stretch m-5">
                <article className="px-10">
                    <img src={LogoRSApp} alt="LogoRSA" width="350px" height="300px" />
                </article>
                <article >
                    <h3><b>¿Qué es RSApp?</b></h3>
                        <p className="text-justify">Room Service App es una aplicación web enfocada a ayudar al sector hotelero brindando 
                        una mejor comunicación entre el huesped y hospedador.</p><br/>
                </article>
                <article>
                    <h3><b>Objetivo general</b></h3>
                        <p className="text-justify">Crear una aplicación web para los hoteles del Puerto de Acapulco, Guerrero, que
                        permita tener un control de actividades de cada servicio, para que el encargado de área 
                        visualice todas las peticiones de los huéspedes de forma jerárquica, rápida y eficaz.</p>
                </article>
                <article>
                    <h4><b>Objetivos especificos:</b></h4>
                    <ul className="list-disc">
                        <p>Mejorar la administración de hoteles y resorts del Puerto.</p>
                        <p>Planificar y documentar la asignación y reparto de tareas del personal.</p>
                        <p>Agilizar el trabajo para que el personal tenga capacidad de respuesta 
                            y pueda atender satisfactoriamente los imprevistos.</p>
                        <p>Mejorar la comunicación entre el huésped y el hotel.</p>
                        <p>Llevar un mejor control de inventarios de enseres.</p>
                        <p>Brindar una mejor atención al cliente.</p>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default Info
