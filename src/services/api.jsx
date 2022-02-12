import axios from "axios";


const BASE_URL = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : 'http://localhost:5000';


function heartBeat(){
    return axios.get(`${BASE_URL}/health/heart-beat`);
}

async function signUp(body){
    await axios.post(`${BASE_URL}/auth/sign-up`, body);
}
async function signIn(body){
    debugger;
    await axios.post(`${BASE_URL}/auth/sign-in`, body);
}


const api = {
    heartBeat,
    signUp,
    signIn,
}

export default api;