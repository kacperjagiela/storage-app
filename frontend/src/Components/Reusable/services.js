import axios from 'axios';

export const serverIp = 'http://192.168.0.52:8080';

export const getAllProducts = () => (axios.get(`${serverIp}/products`));

export const getAllCategories = () => (axios.get(`${serverIp}/categories`));

export const addCategory = state => (axios.post(`${serverIp}/add-category`, state));

export const addProduct = state => (axios.post(`${serverIp}/add-product`, state));

export const changeProduct = state => (axios.post(`${serverIp}/change-product`, state));

export const removeProduct = id => (axios.delete(`${serverIp}/remove-product`, { data: { productID: id } }));
