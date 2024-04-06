

import axios from 'axios';
const ApiDelivery = axios.create({
 baseURL: 'https://192.168.101.79:3003/api',
 headers: {
 'Content-Type': 'application/json'
 }
});
export {ApiDelivery};