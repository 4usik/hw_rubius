import { API_PATH } from '../constants';
import pubsubService from './pubsub-service';
import TokenService from './token-service';

export class HttpService {

    constructor(controllerName = '') {
        this.baseApi = `${API_PATH}${controllerName && '/'}${controllerName}`;
    }

    get baseHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TokenService.getToken()}`
        }
    }

    async get(path = '') {
        const response = await fetch(`${this.baseApi}/${path}`, {
            headers: this.baseHeaders
        });
        return this._handleResponse(response);
    }

    async delete(id){
        const response = await fetch(`${this.baseApi}/${id}`, {
            headers: this.baseHeaders,
            method: 'DELETE'
        });
        return this._handleResponse(response);
    }

    async post(path = '', body) {
        const stringifiedData = JSON.stringify(body);

        const response = await fetch(`${this.baseApi}/${path}`, {
            method: 'POST',
            body: stringifiedData,
            headers: this.baseHeaders
        });

        return this._handleResponse(response);
    }

    async postFormData(path = '', body) {
        const response = await fetch(`${this.baseApi}/${path}`, {
            method: 'POST',
            body,
            headers: {
                ...this.baseHeaders,
                'Content-Type': 'multipart/form-data'
            }
        });

        return this._handleResponse(response);
    }

    async _handleResponse(response) {
        const parsedData = await response.json();

        if (response.ok) {
            return parsedData;
        }

        if (response.status === 401) {
            pubsubService.emit('logout');
        }

        throw parsedData;
    }
}