const payload = { userEmail: "Kohli18@gmail.com", userPassword: "Welcome@123" };

export const APIFix = {
    LoginViaAPI: async ({ request }, use) => {
        const loginResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: payload
        });
        const loginData = await loginResponse.json();
        // loginResponse.ok() ? console.log("Login successful") : console.log("Login failed");
        await use(loginData);
    }
};


