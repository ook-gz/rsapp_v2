/*Custom hook para validar form*/

//importamos el useState de react
import { useState } from "react"

//creamos una función
const useForm = () => {
    
    //creamos un variable de estado
    const [data, setData] = useState({});
    
    //creamos una función para manejar el cambio del form
    const handleChange = ({ target }) => {
        //sacamos el name y value del objeto target 
        const { name, value } = target 
        //cambiamos el estado la variable data y copiamos lo que hay en data
        setData({ ...data, 
            [name]: value });//verificamos el name y el value para despues enviarlo
    }
    //retornamos las variables a usar en el componente
    return [data, handleChange];
}
//exportamos la función
export default useForm;