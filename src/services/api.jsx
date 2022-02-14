import axios from "axios";


const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}

function signUp(body){
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}
function signIn(body){
    return axios.post(`${BASE_URL}/auth/sign-in`, body);
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

function getCards (config) {
    return axios.get(`${BASE_URL}/payment-card`, config);
}

function deleteCard(id, config) {
    return axios.delete(`${BASE_URL}/payment-card/${id}`, config);
}

const api = {
    heartBeat,
    signUp,
    signIn,
    getProducts,
    getCategories,
    getProductsCategory,
    getCards,
    deleteCard,
}

export default api;