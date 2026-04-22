import { test, expect } from "../Fixtures/MergeTest.fixture";

test('newApiClient', async ({ userClient }) => {
  const token = await userClient.getToken("Kohli18@gmail.com", "Welcome@123");
  console.log(token);
});
