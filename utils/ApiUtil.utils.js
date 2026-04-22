
export class ApiUtil {
    constructor(userName, password, request) {
        this.request = request;
        this.payload = { userEmail: userName, userPassword: password };
    }

    async GetLoggedInUser() {
        const loginResponse = await this.request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: this.payload
        });
        const loginData = await loginResponse.json();
        console.log(loginData);
        return loginData;
    }
}