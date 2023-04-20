import axios from 'axios'

const empleadoApi = axios.create({
    baseURL: 'http://localhost:8000/empleados/api/v1/empleados/'
});

export const getAllEmpleados = () => empleadoApi.get('/');

export const newEmpleado = (empleado) => empleadoApi.post('/', empleado);
