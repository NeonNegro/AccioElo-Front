import axios from "axios";


const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}

async function signUp(body){
    await axios.post(`${BASE_URL}/auth/sign-up`, body);
}
async function signIn(body){
    await axios.post(`${BASE_URL}/auth/sign-in`, body);
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
    signUp,
    signIn,
    getProducts,
    getCategories,
    getProductsCategory,
}

export default api;