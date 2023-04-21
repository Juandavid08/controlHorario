import { useEffect, useState } from "react"
import { getAllEmpleados } from "../api/empleado.api"
import { EmpleadoCard } from "./EmpleadoCard";

export function EmpleadosList() {

    const [empleados, setEmpleados] = useState([]);
    const [filtroFecha, setFiltroFecha] = useState("");
    const [filtroNombre, setFiltroNombre] = useState("");

    useEffect(() => {
        async function loadEmpleados() {
            const res = await getAllEmpleados();
            setEmpleados(res.data);
        }
        loadEmpleados();
    }, [])

    const filtrarEmpleados = () => {
        return empleados.filter((empleado) => {
            if (filtroFecha && !empleado.entrada.includes(filtroFecha)) {
                return false;
            }
            if (filtroNombre && !empleado.nombre.toLowerCase().includes(filtroNombre.toLowerCase())) {
                return false;
            }
            return true;
        });
    };

    return <div >
        <div className='max-w-xl mx-auto'>
            <label htmlFor="filtroFecha">Filtrar por fecha: </label>
            <input className='bg-zinc-200 p-3 rounded-lg block w-2/4 mb-3' style={{ color: "black" }} type="date" id="filtroFecha" value={filtroFecha} onChange={(e) => setFiltroFecha(e.target.value)} />
        </div>
        <div className='max-w-xl mx-auto'>
            <label htmlFor="filtroNombre">Filtrar por nombre: </label>
            <input className='bg-zinc-200 p-3 rounded-lg block w-2/4 mb-3' style={{ color: "black" }} type="text" id="filtroNombre" value={filtroNombre} onChange={(e) => setFiltroNombre(e.target.value)} />
        </div>

        <div className="grid grid-cols-3 gap-5">
            {filtrarEmpleados().map((empleado) => (
                <EmpleadoCard key={empleado.id} empleado={empleado} />
            ))}
        </div>
    </div>

}
