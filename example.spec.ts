import { test, expect } from './fixtures';  // ייבוא מ-fixtures
// @ts-ignore
import { allure } from 'allure-playwright';
import { logger } from '../Logger';

test('בדיקה מלאה: מעבר לניהול הסקר ואז למסך עונות', async ({ homePage }) => {
  // כל הטסט תחת אותו Test case
  allure.description("The test case is to register a new user and add a product to the cart");
  allure.owner("or gilat");
  allure.tags("entry", "development");
  allure.severity('critical');

  await allure.step('התחברות למערכת', async () => {
  
    // כאן אתה יכול להכניס את הפקודות של ההתחברות
    await homePage.goto(); // לדוגמה
    
    await homePage.navigate(); // לדוגמה
 
    await homePage.actions();

  });
});





