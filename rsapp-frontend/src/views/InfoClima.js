import {useEffect, useState} from 'react'
import Header from '../layouts/Header';

const InfoClima = () => {
    const [clima, setClima] = useState([]);
    
    const url = "https://api.tutiempo.net/json/?lan=es&apid=XxG4za4XqX4vxQM&lid=30220";

    const obtenerClima = async () => {
        try {
            const data = await fetch(url);
            const res = await data.json();
            const { day1, day2, day3 } = res;

            const climaData = [
                {
                    id:1,
                    date:day1.date,
                    temp_max:day1.temperature_max,
                    temp_min:day1.temperature_min,
                    icon:day1.icon,
                    texto:day1.text,
                    humedad:day1.humidity,
                    viento:day1.wind,
                    viento_direc:day1.wind_direction
                },
                {
                    id:2,
                    date:day2.date,
                    temp_max:day2.temperature_max,
                    temp_min:day2.temperature_min,
                    icon:day2.icon,
                    texto:day2.text,
                    humedad:day2.humidity,
                    viento:day2.wind,
                    viento_direc:day2.wind_direction
                },
                {
                    id:3,
                    date:day3.date,
                    temp_max:day3.temperature_max,
                    temp_min:day3.temperature_min,
                    icon:day3.icon,
                    texto:day3.text,
                    humedad:day3.humidity,
                    viento:day3.wind,
                    viento_direc:day3.wind_direction
                }
            ]
            setClima(climaData);
        } catch (error) {
            console.log(error);
        }
    }

useEffect(() => {
    obtenerClima();
    console.log(clima);
}, []);

  return (
    <>
    <Header/>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
            {/* <!--start here--> */}
            {clima.map((cd)=>(
                    <div className="p-4 md:w-1/3" >
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div className="w-full">
                                <div className="w-full flex p-2">
                                    <div className="p-2 ">
                                    <img 
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F437%2F403%2Foriginal%2Fsun-vector-icon.jpg&f=1&nofb=1" alt="author" 
                                        className="w-10 h-10 rounded-full overflow-hidden"/>
                                    </div>
                                    <div className="pl-2 pt-2 ">
                                    <p className="font-bold">Pronostico</p>
                                    <p className="text-xs">{cd.date}</p>
                                    </div>
                                </div>
                            </div>
                            
                        
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ciudadypoder.mx%2Fwp-content%2Fuploads%2F2016%2F03%2Fnublado.jpg&f=1&nofb=1" alt="blog cover"/>
                        
                        <div className="p-4">
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{cd.texto}</h1>
                            <div className="flex items-center flex-wrap ">
                                <span className="m-4">
                                    <p><b>Temperatura maxima: </b>{cd.temp_max}</p>
                                    <p><b>Temperatura minima: </b>{cd.temp_min}</p>
                                </span>
                                <span className="m-4">
                                    <p><b>Humedad: </b>{cd.humedad}</p>
                                    <p><b>Velocidad del viento: </b>{cd.viento}</p>
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
            ))}
        {/* <!--End here--> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default InfoClima