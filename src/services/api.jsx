import axios from "axios";


const BASE_URL = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : 'http://localhost:5000';
console.log(` eeeee... ${process.env.PUBLIC_URL}`)


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}


const api = {
    heartBeat,
}

export default api;