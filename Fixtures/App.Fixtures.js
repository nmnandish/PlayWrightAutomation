
import { test as base, expect } from '@playwright/test';
import { pageFixture } from './Page.fixture';


export const test = base.extend({
     ...pageFixture
});

export { expect };