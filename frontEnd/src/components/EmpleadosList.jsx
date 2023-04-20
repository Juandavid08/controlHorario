import { useEffect } from "react"
import { getAllEmpleados } from "../api/empleado.api"

export function EmpleadosList() {

    useEffect(() => {
        function loadEmpleados() {
            const res = getAllEmpleados();
            console.log(res);
        }
        loadEmpleados();
    }, [])

    return <div>EmpleadosList</div>

}
