import { useEffect, useContext } from "react"
import Header from "../../layouts/Header";
import Breadcrumb from "./Breadcrumbs";
import iconBox from "../../img/box.png";
import UserContext from '../../contexts/UserContext';
import { useCart } from "react-use-cart";

const Items = () => {
    
    const { items, setItems, addItem, isEmpty, 
        totalUniqueItems, updateItemQuantity, removeItem } = useCart();
    
    const { token } = useContext(UserContext);
    
    const listarItems = async () => {
        try {
            if(token){
            // Hacemos un fetch a la ruta
            const data = await fetch('http://localhost:3005/rsapp/items', {
                headers:{
                    'content-type': 'application/json',
                    "authToken": token
                }
            });
            // sacamos el objeto items de la res
            const { items } = await data.json();
            // Cargamos lo que sacamos de la data a la variable items
            setItems(items);
            }
        } catch (error) {
            
        }
        console.log( items);
    }
    // definimos una constante con el nombre de la página actual
    const pageActual = "Items"

    useEffect(() => {
        // Llamamos a la función para listar items
        listarItems();
        // Actualizamos el titulo de la pestaña
        document.title=`R.S.App | ${pageActual}`
    }, []);

    return (
        <>
            <Header />
            <main>
            <Breadcrumb crumbs={pageActual}/>

                <section className="grid lg:grid-cols-2 gap-4 m-6 sm:grid-cols-1 gap-2 ">
                    <article className="bg-white shadow-md rounded ">
                        <h2 className="text-center"><b>Items disponibles</b></h2>
                        <div className="grid grid-cols-3 gap-4">
                            {items.map(item => (
                                    <div key={item.id_item} className="bg-white shadow-md rounded flex p-4 hover:bg-violet-600">
                                        <button onClick={() => addItem(parseInt(item.id_item))}>
                                        <img src={iconBox} className="justify-center" alt="icono caja" width="40px" height="40px"/>
                                        <p className="content-center"><b>{item.nm_item}</b></p>
                                        </button>
                                    </div>
                            ))}
                        </div>

                    </article>

                    <article className="bg-gray-50">

                    </article>
                </section>
            </main>
        </>
    )
}

export default Items
