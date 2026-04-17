import { test as base, expect } from '@playwright/test';
import { pageFixture } from './Page.fixture';
import { APIFix } from './APIAuth.fixture';

export const test = base.extend({
     ...pageFixture,
     ...APIFix
});

export { expect };