import {Fragment, useEffect, useState} from 'react'
import Header from "../layouts/Header"

const Clima = () => {
    const [clima, setClima] = useState([]);
        
    const claveApi = "XxG4za4XqX4vxQM";
    const url = `https://api.tutiempo.net/json/?lan=es&apid=${claveApi}&lid=30220`;
    
    const obtenerClima = async () => {
        try {
            const data = await fetch(url);
            const res = await data.json();
            const { day1, day2, day3, day4, day5, day6, day7 } = res
            const climaData = [
            {
              id:1, fecha:day1.date,
              temp_max:day1.temperature_max,
              temp_min:day1.temperature_min,
              pronostic:day1.text
            },{
              id:2, fecha:day2.date,
              temp_max:day2.temperature_max,
              temp_min:day2.temperature_min,
              pronostic:day2.text
            },{
              id:3, fecha:day3.date,  
              temp_max:day3.temperature_max,  
              temp_min:day3.temperature_min,
              pronostic:day3.text
            },{
              id:4, fecha:day4.date,  
              temp_max:day4.temperature_max,  
              temp_min:day4.temperature_min,
              pronostic:day4.text
            },{
              id:5, fecha:day5.date,  
              temp_max:day5.temperature_max,  
              temp_min:day5.temperature_min,
              pronostic:day5.text
            },{
              id:6, fecha:day6.date,  
              temp_max:day6.temperature_max,  
              temp_min:day6.temperature_min,
              pronostic:day6.text
            },{
              id:7, fecha:day7.date,  
              temp_max:day7.temperature_max,  
              temp_min:day7.temperature_min,
              pronostic:day7.text
            }];
            console.log(climaData);
            setClima(climaData);
        } catch (error) {
            console.log(error);
        }
    }

useEffect(() => {
    obtenerClima();
}, []);


  return (
    <>

      <Header/>
      <h1 className="text-center text-3xl font-semibold">Pronostico del clima</h1>

      <article className="bg-white shadow-md rounded ">
            <div className="grid grid-cols-3 gap-4">
            {clima.forEach((cd) => (  
              <div className="rounded">
                <div key={cd.id}>
                  <p>{cd.fecha}</p>
                </div>
              </div>
            ))}
          </div>
      </article>
    </>
  )
}

export default Clima;