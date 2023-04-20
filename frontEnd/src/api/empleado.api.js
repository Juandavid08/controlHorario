import axios from 'axios'

export const getAllEmpleados = () =>{
    const res = axios.get('http://localhost:8000/empleados/api/v1/empleados/')
}