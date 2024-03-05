import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,

    headers: {
        'Accept' : 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },

})

export default clienteAxios;