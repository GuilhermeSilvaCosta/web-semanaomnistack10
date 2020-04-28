import axios from 'axios';

const api = axios.create({
    baseURL: 'https://potfolio.redirectme.net/week10'
});

export default api;