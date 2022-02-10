import axios from "axios";


const BASE_URL = process.env.PUBLIC_URL;


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}


const api = {
    heartBeat,
}

export default api;