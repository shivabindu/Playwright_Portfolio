
import {test as base} from "@playwright/test";
import { HomePage } from '../pages/home.po';

export const test = base.extend({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
        await page.close();
        console.log("Closing the page after test execution");
    }
})  