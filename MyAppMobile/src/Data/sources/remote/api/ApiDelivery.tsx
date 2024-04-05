import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.101.79:3002/api',
    headers: {
        'Content-type': 'application/json'
    }
})

export { ApiDelivery }