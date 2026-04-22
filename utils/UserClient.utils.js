import { ApiClient } from './api/ApiClient';

export class UserClient {
    constructor(ApiClient) {
        this.ApiClient = ApiClient;
    }
    async getToken(userName, password) {
        const response = await this.ApiClient.postCall(userName, password)
        return response.token;
    }
}