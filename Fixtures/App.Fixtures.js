import { test as base, expect } from '@Playwright/test';
import { pageFixture } from './Page.fixture';
import { APIFix } from './APIAuth.fixture';
import { ApiUtil } from '../utils/ApiUtil.utils';

export const test = base.extend({
     ...pageFixture,
     ...APIFix,
     APILOGIN: async ({ request }, use) => {
          const APIUtil = new ApiUtil("Kohli18@gmail.com", "Welcome@123", request);
          const APIResponse = await APIUtil.GetLoggedInUser();
          await use(APIResponse);
     }
});

export { expect };