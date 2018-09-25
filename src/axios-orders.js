import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-app-43cfb.firebaseio.com/'
});

export default instance;
