import React, { } from 'react';
import useForm from '../../hooks/useForm';

const FormItems = () => {
    // const [selecionados, setSelecionados] = useState([]);
  
    // const handleSelect = function(selectedItems) {
    //       const flavors = [];
    //       for (let i=0; i<selectedItems.length; i++) {
    //           flavors.push(selectedItems[i].value);
    //       }
    //       setSelectedFlavors(flavors);
    //   }

  const [data, handleChange] = useForm();

  const handleSubmit = (e) => {
    //evitamos que se recargue la pagina
    e.preventDefault();
    //imprimimos lo que reciba el form
    console.log(data);    
}

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                    Mensaje
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                name='correo' id='correo' type="mail" placeholder="Deje un mensaje" onChange={handleChange}/>
            </div>

            <div>
                <label className="font-semibold leading-none">Sus items</label>
                <textarea type="text" name="mensaje" id="mensaje" onChange={handleChange}
                className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none 
                focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/> 
            </div>            
            <button type="submit">Enviar</button>
        </form>
        </>
    );
};

export default FormItems;
