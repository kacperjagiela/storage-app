import axios from 'axios';

export const serverIp = 'http://192.168.42.253:8080';

export const getAllProducts = () => (axios.get(`${serverIp}`));

export const addProduct = 1;
