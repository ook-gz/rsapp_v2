// Importamos todos los componente a usar
import { Routes, Route } from "react-router-dom"; //Libreria para rutear
//Componentes para el proyecto
import Login from "./components/Login";
import UserHomePage from './views/UserHomePage';
import Pagerender from "./views/Pagerender";
import {UserProvider} from './contexts/UserContext';
import { CartProvider } from "react-use-cart";
/*componentes para usuario*/
import Info from "./views/Info";
import Contacto from "./views/Contacto";
import Items from "./components/client/Items";
import FormLimpieza from "./components/client/FormLimpieza";
import FormReporte from "./components/client/FormReporte";
import Recomendaciones from "./views/Recomendaciones";
import Huespedinfo from "./components/client/Huespedinfo";
import FormNuevaPass from "./components/FormNuevaPass";
import FormCambiarPass from "./components/FormCambiarPass";
import InfoClima from "./views/InfoClima";
/*componentes para Admin */


// Creamos un componente
function App() {
  return (
<div className="App">
{/* Aqui se definen TODAS las rutas a usar dentro del proyecto */}
<UserProvider>
  <CartProvider>
  <Routes>{/*Rutas del usuario*/}
    <Route path="/" element={<Login />}/>
      <Route path="/rsapp" element={<Pagerender />}>
      <Route index element={<UserHomePage />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="info" element={<Info />} />
      <Route path="servicios-items" element={<Items />} />
      <Route path="servicios-limpieza" element={<FormLimpieza />} />
      <Route path="servicios-reportar" element={<FormReporte />} />
      <Route path="recomendaciones" element={<Recomendaciones />} />
      <Route path="huesped-info" element={<Huespedinfo />} />
      <Route path="clima-info" element={<InfoClima/>} />
    </Route>
    <Route path="recuperar-pass" element={<FormNuevaPass />} />
    <Route path="recuperar-pass/:id/:token" element={<FormCambiarPass />} />
  {/*Rutas del admin*/}
    <Route path="/rsadmin" element={<h1>RSAdmin </h1>}>

    </Route>
  </Routes>
  </CartProvider>
</UserProvider>
</div>
  );
}

// Exportamos el componente
export default App;
