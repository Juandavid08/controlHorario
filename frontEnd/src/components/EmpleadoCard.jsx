
export function EmpleadoCard({ empleado }) {
    return (
        <div>
            <h1>{empleado.nombre}</h1>
            <h1>{new Date(empleado.entrada).toLocaleString('es-CO', { dateStyle: 'long', timeStyle: 'long' })}</h1>
            <h1>{new Date(empleado.salida).toLocaleString('es-CO', { dateStyle: 'long', timeStyle: 'long' })}</h1>
            <hr />
        </div>
    )
}
