import axios from 'axios';


export const key = "d49f3eee2fb43e6cc86aed42caea5baee79c466f";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})



export default api;