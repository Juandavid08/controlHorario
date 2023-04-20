import axios from 'axios'

const empleadoApi = axios.create({
    baseURL: 'http://localhost:8000/empleados/api/v1/empleados/'
});

export const getAllEmpleados = () => empleadoApi.get('/');

export const getEmpleado = (id) => empleadoApi.get(`/${id}/`);

export const newEmpleado = (empleado) => empleadoApi.post('/', empleado);

export const deleteEmpleado = (id) => empleadoApi.delete(`/${id}`);

export const updateEmpleado = (id, empleado) => empleadoApi.put(`/${id}/`, empleado);