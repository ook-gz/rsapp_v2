import { useEffect } from "react"
import Header from "../../layouts/Header"
import Breadcrumb from "./Breadcrumbs";


const FormLimpieza = () => {
    const pageActual = "Limpieza";
    useEffect(()=>{
        document.title=`R.S.App | ${pageActual}`
    },[]);

    return (
        <>
            <Header />
            <Breadcrumb crumbs={pageActual}/>
            <h1>Form Limpieza</h1>    
        </>
    )
}

export default FormLimpieza
