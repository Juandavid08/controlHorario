import { useEffect, useState } from "react"
import { getAllEmpleados } from "../api/empleado.api"
import { EmpleadoCard } from "./EmpleadoCard";

export function EmpleadosList() {

    const [empleados, setEmpleados] = useState([]);
    let fecha = new Date();
    let dia = fecha.getDate

    useEffect(() => {
        async function loadEmpleados() {
            const res = await getAllEmpleados();
            setEmpleados(res.data);
        }
        loadEmpleados();
    }, [])

    return <div>
        {empleados.map((empleado) => (
            <EmpleadoCard key={empleado.id} empleado={empleado}/>
        ))}
    </div>

}
