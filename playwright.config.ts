import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 190000,
  expect: {
    timeout: 190000,
  },
  use: {
    headless: false,
    viewport: { width: 1281, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: {
      mode: 'on',
      size: { width: 1281, height: 720 },
    },
  },
  
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
  ],
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],
});
