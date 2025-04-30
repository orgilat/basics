
import { logger } from '../Logger';
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly aplication: Locator;
    readonly way: Locator;
    readonly country: Locator;
    readonly beginwith: Locator;
    readonly stlist: Locator;
    readonly endpoint: Locator;
    readonly ndlist: Locator;
    readonly search: Locator;





constructor(page: Page) {
    this.page = page;
    this.aplication = page.locator('//li[@id="menu-item-16630"]/a[1]');
    this.way = page.locator('//a[normalize-space(text())="גירסה לדפדפן"]');
    this.country = page.locator('//a[normalize-space(text())="Israel"]');
    this.beginwith = page.locator('input[placeholder="בחירת נקודת מוצא"]');
    this.stlist =page.locator('#pr_id_1_list li')
    this.endpoint= page.locator('#to-input')
    this.ndlist=page.locator('#pr_id_2_list li')
    //span[normalize-space(text())='קניותר/ויצמן']
    this.search=page.locator('button[title="חפש"]')
}


  async goto() {

    await this.page.goto('https://moovit.com/he');
    logger.info(" we arrived for the specific page")
}
  async navigate() {
        await this.aplication.hover();
        await this.way.click();
        logger.info("  navigation succesfully")

    }
  async actions() {
    
    await this.country.waitFor({ state: 'visible' });
    await this.country.click();
    
    await this.beginwith.fill("נס ציונה");
    await expect(this.beginwith).toHaveValue("נס ציונה");
    await this.stlist.nth(0).click();
    await this.endpoint.fill("נס ציונה");
    await expect(this.endpoint).toHaveValue("נס ציונה");
    await this.ndlist.nth(1).click();
    await this.search.click();
    logger.info(" finished page 1  ")

  }



}