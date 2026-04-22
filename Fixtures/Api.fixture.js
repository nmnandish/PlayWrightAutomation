import { test as base, expect } from '@playwright/test';
import { ApiClient } from '../utils/api/ApiClient';
import { UserClient } from '../utils/UserClient.utils';

export const apiFixtureNew = base.extend({
    apiclient: async ({ request }, use) => {
        await use(new ApiClient(request));
    },
    userClient: async ({ apiclient }, use) => {
        await use(new UserClient(apiclient));
    },
});