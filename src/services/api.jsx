import axios from "axios";


const BASE_URL = 'http://localhost:5000';


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}


const api = {
    heartBeat,
}

export default api;