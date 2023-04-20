import { useNavigate } from "react-router-dom"

export function EmpleadoCard({ empleado }) {
    
    const navigate = useNavigate()

    return (
        <div 
        className="bg-zinc-800 p-3 hover:bg-zinc-700
        hover:cursor-pointer"
        onClick = {() => {
            navigate(`/empleado/${empleado.id}`)
        }}
        >
            <h1 className="font-bold uppercase">{empleado.nombre}</h1>
            <h1 className="text-slate-400">ENTRADA: {new Date(empleado.entrada).toLocaleString('es-CO', { dateStyle: 'long', timeStyle: 'long' })}</h1>
            <h1 className="text-slate-400">SALIDA: {new Date(empleado.salida).toLocaleString('es-CO', { dateStyle: 'long', timeStyle: 'long' })}</h1>
            <hr />
        </div>
    )
}
