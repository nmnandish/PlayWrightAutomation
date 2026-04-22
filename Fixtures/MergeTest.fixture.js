import { mergeTests } from "@playwright/test";
import { apiFixtureNew } from "./Api.fixture";

export const test = mergeTests(apiFixtureNew);
export { expect } from '@playwright/test';
