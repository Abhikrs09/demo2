import { test, expect } from "../Fixtures/Page_fixtures";

test('0010', async ({ page,baseURL,homePage,checkBoxPage }) => {
    
    await page.goto(`${baseURL}`);
    await homePage.clickCheckboxDempLink();

    await checkBoxPage.clickOnCheckBoxckb1();
    expect(checkBoxPage.isclickOnCheckBoxckb1Displayed()).toBeTruthy();

    expect(checkBoxPage.isCkb2disable1Displayed()).toBeTruthy();
    await checkBoxPage.clickCkc2();

    expect(checkBoxPage.isCkb2IsEnabled()).toBeTruthy();
    page.waitForTimeout(10000);
    await homePage.scrollToPosition(100);

    await checkBoxPage.clickSelectall();
    expect(checkBoxPage.isCkb4IsEnabled()).toBeTruthy();
    page.waitForTimeout(10000);
    
 




});

// {const dis  =  await checkBoxPage.isTitleDisplayed();
//  expect(dis).toBeTruthy();
//  expect(await checkBoxPage.checkSingleCkbIsVisible()).toBeTruthy();

//  const ckb1Dis = await checkBoxPage.isckb1Displayed();
//  expect(ckb1Dis).toBeTruthy();
// }