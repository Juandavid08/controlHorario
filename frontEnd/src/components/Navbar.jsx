import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <div style={{ padding: '2% 5%' }} className="flex justify-between py-3">
      <Link to="/empleados">
        <h1 className="font-bold text-3xl mb-4">Juan David JR.</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link className="font-bold text-3x1 mb-4" to="/RegistrarEmpleado"> Registrar Empleado</Link>
      </button>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link className="font-bold text-3x1 mb-4" to="/empleados"> Ver Empleados</Link>
      </button>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link className="font-bold text-3x1 mb-4" to="/RegistrarProovedor"> Crear Proovedores</Link>
      </button>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link className="font-bold text-3x1 mb-4" to="/proovedores"> Ver Proovedores</Link>
      </button>
    </div>
  )
}

