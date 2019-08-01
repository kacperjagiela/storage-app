import axios from 'axios';

export const serverIp = 'http://192.168.42.253:8080';

export const getAllProducts = () => (axios.get(`${serverIp}`));

export const addProduct = state => (axios.post(`${serverIp}/addProduct`, state));

export const removeProduct = id => (axios.delete(`${serverIp}/removeProduct`, { data: { productID: id } }));
