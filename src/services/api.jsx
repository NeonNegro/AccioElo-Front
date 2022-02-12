import axios from "axios";


const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';
console.log(` eeeee... ${process.env.REACT_APP_PUBLIC_URL}`)


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}

function getProducts () {
    return axios.get(`${BASE_URL}/products`);
}

function getCategories () {
    return axios.get(`${BASE_URL}/categories`);
}

function getProductsCategory (id) {
    return axios.get(`${BASE_URL}/products/${id}`);
}

const api = {
    heartBeat,
    getProducts,
    getCategories,
    getProductsCategory,
}

export default api;