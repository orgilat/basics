import { test as baseTest } from '@playwright/test';  // baseTest מ-@playwright/test
import { HomePage } from '../pages/HomePage';


type Pages = {

  homePage: HomePage;

};

// יוצרים test חדש עם fixtures מותאמים אישית
export const test = baseTest.extend<Pages>({
 
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
 
});

// אין צורך לייבא שוב את expect, זה כבר קיים מתוך test המורחב!
export const expect = test.expect;