import axios from 'axios';

const ApiDelivery = axios.create({
 baseURL: 'http://192.168.101.82:3006/api',
 headers: {
 'Content-Type': 'application/json'
 }
});
export {ApiDelivery};