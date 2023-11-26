import axios from "axios";


const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers:{
        "content-type": "application/json" 
    }
})

export {instance};