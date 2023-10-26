import { test, expect } from "../Fixtures/Page_fixtures";
import * as radiobtndemoData from "../test-data/Radio_Button_Demo_Data.json";


test('006 Click on button to get the selected value', async ({page,baseURL,homePage,radioButtonDemoPage})=>{


    await page.goto(`${baseURL}`);

    await homePage.clickRadioButtonsDemo();
    await radioButtonDemoPage.btn_get_selected_value();

    // Verifying that the radio button is Selected or not.
    expect(await radioButtonDemoPage.verify_isSelected_radio_btn()).toBeTruthy();

    await radioButtonDemoPage.btn_get_value();
    
    //Comparing the value that will come when we click that radio button. 
    const get_selected_value = await radioButtonDemoPage.verify_get_selected_value();
    expect(get_selected_value).toBe(radiobtndemoData.verify_btn_get_value);

})

test('007 Disabled Checkbox', async ({page,baseURL,homePage,radioButtonDemoPage})=>{

    await page.goto(`${baseURL}`);
    await homePage.clickRadioButtonsDemo();

    // I have used this to wait for the page to reach a stable network idle state before
    // proceeding with further actions in the test.
    await page.waitForLoadState('networkidle');
    // Verifying that the radio button is Disable or not.
    expect(radioButtonDemoPage.btn_disable_radioButton()).toBeTruthy();
    
    radioButtonDemoPage.btn_enable_radioButton();
    // Verifying that the radio button is Enable or not.
    expect (radioButtonDemoPage.verify_btn_enable_radioButton()).toBeTruthy();

})

test('008 Click on button to get the selected values from Gender and Age.', async ({page,baseURL,homePage,radioButtonDemoPage})=>{

    
    await page.goto(`${baseURL}`);
    await homePage.clickRadioButtonsDemo();

    // I have used this to wait for the page to reach a stable network idle state before
    // proceeding with further actions in the test.
    await page.waitForLoadState('networkidle');

    await radioButtonDemoPage.rdbtn_gender_age();

    //Comparing the value that will come when we click that radio button. 
    expect(await radioButtonDemoPage.verify_gender_value()).toBe(radiobtndemoData.gender);
    expect (await radioButtonDemoPage.verify_age_value()).toBe(radiobtndemoData.age);

})

