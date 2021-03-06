import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';


Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.common['Autherization'] = 'AUTH_TOKEN_FROM_INDEX';
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Axios.interceptors.request.use(request => {
    return request;
}, error => {
    Promise.reject(error);
})

Axios.interceptors.response.use(response => {
    return response;
}, error => {
    Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
