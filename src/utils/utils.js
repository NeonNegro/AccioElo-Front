import api from "../services/api";

async function health(){
    const x = await api.heartBeat();
    console.log(x.data);
    return x.data;
}

export {
    health,
}