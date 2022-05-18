import { useEffect, useContext } from "react"
import Header from "../../layouts/Header";
import Breadcrumb from "./Breadcrumbs";
import FormItems from "./FormItems";
import iconBox from "../../img/box.png";
import UserContext from '../../contexts/UserContext';
import { useCart } from "react-use-cart";

const Items = () => {
    
    const { items, setItems } = useCart();
    
    const { token } = useContext(UserContext);
    //console.log(user);
    
    const listarItems = async () => {
        try {
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
        } catch (error) {
            
        }
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
                {/* invocamos el componente breadcrumb */}
            <Breadcrumb crumbs={pageActual}/>

                <section className="grid lg:grid-cols-2 gap-4 m-6 sm:grid-cols-1 gap-2">
                    <article>
                        <h2 className="text-center"><b>Items disponibles</b></h2>
                        <div className="grid grid-cols-3 gap-4">
                            {items.map(item => (
                            <div key={item.id_item} className="bg-white shadow-md rounded flex p-4">
                                <img src={iconBox} className="justify-start" alt="icono caja" width="40px" height="40px"/>
                                <p className="content-center"><b>{item.nm_item}</b></p>
                            </div>
                            ))}
                        </div>

                    </article>

                    <article >
                        <FormItems/>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Items
