import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const login = async (credentials) => {
  const res = await api.post('/auth/login', credentials);
  return res.data;
};

export const register = async (credentials) => {
  const res = await api.post('/auth/register', credentials);
  return res.data;
};
export const getProducts = async () => {
  const res = await api.get('/products');
  return res.data;
};

export const addProduct = async (product) => {
  const res = await api.post('/products', product);
  return res.data;
};

export const updateProduct = async (id, product) => {
  const res = await api.put(`/products/${id}`, product);
  return res.data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
};