import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <div style={{padding: '0 5%'}}>
        <Link to="/empleados">
            <h1>Juan David JR.</h1>
        </Link>

        <Link to="/RegistrarEmpleado"> registrar Empleado</Link>
        <Link to="/nuevo-proovedor"> Crear Proovedores</Link>
        <Link to="/empleados"> Ver Empleados</Link>
        <Link to="/Proovedores"> ver Proovedores</Link>
    </div>
  )
}

