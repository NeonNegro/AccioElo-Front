import axios from "axios";


const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';
console.log(` eeeee... ${process.env.REACT_APP_PUBLIC_URL}`)


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}


const api = {
    heartBeat,
}

export default api;