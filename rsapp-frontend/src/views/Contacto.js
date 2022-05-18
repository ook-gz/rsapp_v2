import { useEffect } from "react";
import Header from "../layouts/Header"
//Invocamos el hook para validar form
import useForm from '../hooks/useForm';
import Breadcrumb from "../components/client/Breadcrumbs";
import habitacion2 from "../img/habitacion2.jpg"


const Contacto = () => {
        //extraemos data y handleChange del useForm
        const [data, handleChange] = useForm();

        const handleSubmit = (e) => {
            //evitamos que se recargue la pagina
            e.preventDefault();
            //imprimimos lo que reciba el form
            console.log(data);
            //enviamos esos datos a la función login     
        }

        // definimos una constante con el nombre de la página actual
        const pageActual = "Contacto"

        useEffect(() => {
            document.title=`R.S.App | ${pageActual}`
        }, []);

    return (
        <>
            <Header /> 
            <Breadcrumb crumbs={pageActual}/>
            <div className="grid grid-cols-2 gap-4">                
                <div className="flex items-center justify-center">
                    <div className="w-full pt-4">
                    <h2 className="mb-1 text-center text-3xl font-semibold">Contactanos!</h2>
                    <form className="p-5" onSubmit={handleSubmit}>
                        <div className="md:flex items-center mt-2">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none">Nombre</label>
                                <input type="text" name="nombre" id="nombre" onChange={handleChange}
                                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none">Correo</label>
                                <input type="email" name="correo" id="correo" onChange={handleChange}
                                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Asunto</label>
                                <input type="text" name="asunto" id="asunto" onChange={handleChange}
                                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none">Deje un mensaje</label>
                                <textarea type="text" name="mensaje" id="mensaje" onChange={handleChange}
                                className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Enviar
                            </button>
                        </div>
                    </form> 
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <img src={habitacion2} alt="pasillo" width="600px" height="400px"/>
                </div>
            </div>
        </>
    )
}

export default Contacto
 