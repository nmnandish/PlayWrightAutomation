export class ApiClient {
    constructor(request) {
        this.request = request;
    }

    async postCall(userName, password) {
        const response = await this.request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: { userEmail: userName, userPassword: password }
        });
        const responseBody = await response.json();
        console.log(responseBody);
        return responseBody;
    }
}