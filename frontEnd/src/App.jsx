import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { EmpleadosPage } from './pages/EmpleadosPage'
import { EmpleadosFormPage } from './pages/EmpleadosFormPage'
import { ProovedoresFormPage } from './pages/ProovedoresFormPage'
import { ProovedoresPage } from './pages/ProovedoresPage'
import { Navbar } from './components/Navbar'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

      <div className='container mx-auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to='/empleados' />} />
          <Route path="/empleados" element={<EmpleadosPage />} />
          <Route path="/Proovedores" element={<ProovedoresPage />} />
          <Route path="/RegistrarEmpleado" element={<EmpleadosFormPage />} />
          <Route path="/nuevo-proovedor" element={<ProovedoresFormPage />} />
          <Route path="/empleado/:id" element={<EmpleadosFormPage />} />
        </Routes>
        <Toaster />
      </div>

    </BrowserRouter>

  )
}

export default App