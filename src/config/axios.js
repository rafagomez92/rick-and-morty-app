import axios from 'axios';

const axiosCustomer = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

export default axiosCustomer;