
import { test } from '../fixtures/login';
import { expect } from '@playwright/test';  
import {loginData} from '../testData/login.json'; 



for (const { label, username, password } of loginData.valid) {
  test(`login test - ${label}`, async ({ page, homePage }) => {

    await page.waitForLoadState("networkidle");

    await homePage.launchURL();
    await homePage.clickOnLoginButton(username, password);

    const Header1 = page.getByText('Swag Labs');
    const Header2 = page.getByText('Products');

    await expect(Header1).toBeVisible();
    await expect(Header2).toBeVisible();
  });
}

test('invalid user - ${invalid.label}', async({page, homePage}) =>{

    await page.waitForLoadState("networkidle");

    await homePage.launchURL();
    await homePage.clickOnLoginButton(loginData.invalid.username, loginData.invalid.password);
    const errorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
    await expect(errorMessage).toBeVisible();


})