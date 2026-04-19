
export class ApiUtil {
    constructor(userName, password, request) {
        this.userName = userName;
        this.password = password;
        this.request = request;
        this.payload = { userEmail: this.userName, userPassword: this.password };
    }

    async GetLoggedInUser() {
        // let payload = { userEmail: this.userName, userPassword: this.password };
        const loginResponse = await this.request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: this.payload
        });
        const loginData = await loginResponse.json();
        return loginData;
    }
}