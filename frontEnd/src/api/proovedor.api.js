import axios from 'axios'

const proovedorApi = axios.create({
    baseURL: 'http://localhost:8000/proovedores/api/v1/proovedores/'
});

export const getAllProovedores = () => proovedorApi.get('/');

export const getProovedor = (id) => proovedorApi.get(`/${id}/`);

export const newProovedor = (proovedor) => proovedorApi.post('/', proovedor);

export const deleteProovedor = (id) => proovedorApi.delete(`/${id}`);

export const updateProovedor = (id, proovedor) => proovedorApi.put(`/${id}/`, proovedor);