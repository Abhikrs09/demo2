import { test, expect } from "../Fixtures/Page_fixtures";

test('0010', async ({ page,baseURL,homePage,checkBoxPage }) => {
    
    await page.goto(`${baseURL}`);
    await homePage.clickCheckboxDempLink();

    //expect(checkBoxPage.istitleIsDispalyed()).toBeTruthy();
    console.log()
    await checkBoxPage.clickOnCheckBoxckb1();
    expect(checkBoxPage.isclickOnCheckBoxckb1Displayed()).toBeTruthy();

    expect(checkBoxPage.isCkb2disable1Displayed()).toBeTruthy();
    await checkBoxPage.clickCkc2();

    expect(checkBoxPage.isCkb2IsEnabled()).toBeTruthy();
    await homePage.scrollToPosition(100);

    await checkBoxPage.clickSelectall();
    expect(checkBoxPage.isCkb4IsEnabled()).toBeTruthy();

    await checkBoxPage.clickUnSelectAll();
    expect(checkBoxPage.ckb5IsEnable()).toBeTruthy();
    await page.waitForTimeout(5000);





});

// {const dis  =  await checkBoxPage.isTitleDisplayed();
//  expect(dis).toBeTruthy();
//  expect(await checkBoxPage.checkSingleCkbIsVisible()).toBeTruthy();

//  const ckb1Dis = await checkBoxPage.isckb1Displayed();
//  expect(ckb1Dis).toBeTruthy();
// }