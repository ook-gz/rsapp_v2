import { useEffect } from "react"
import Header from "../../layouts/Header"

const FormReporte = () => {

    useEffect(() => {
        document.title="R.S.App | Reportar"
    }, [])

    return (
        <>
            <Header />
            <h1>Reporte</h1>
        </>
    )
}

export default FormReporte
