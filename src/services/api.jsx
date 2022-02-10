import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

const BASE_URL = process.env.BASE_URL;


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}


const api = {
    heartBeat,
}

export default api;