import { test, expect } from "../Fixtures/Page_fixtures";
import * as samplePageDemoData from "../test-data/Sample_Page_Demo_Data.json";
import { generateRandomNumber } from "../utilities/random_data_generater";


test('001 Sample Demo Form message', async ({ page,baseURL,homePage,simpPageDemo }) => {
    
    // Taking the msg value which we will enter from a json file
    const msg=samplePageDemoData.Sample_demo_Enter_msg;

    await page.goto(`${baseURL}`);
    await homePage.clickSimpleDemoForm();

    await simpPageDemo.Enter_message(msg);

    // Verfying that the msg when we enterd is Visible or not.
    expect ( await simpPageDemo.verify_enter_message_is_visible());
    

});


test('002 Sample Demo Form Get Sum', async ({ page,baseURL,homePage,simpPageDemo }) => {
    
    // Random data for Adding purpose.
    const firstNumber = generateRandomNumber(3);
    const secondNumber = generateRandomNumber(3);

    // Adding these number  for verification.
    const expSum = (parseInt(firstNumber) + parseInt(secondNumber)).toString();
    

    await page.goto(`${baseURL}`);
    await homePage.clickSimpleDemoForm();

    await simpPageDemo.add_two_number(firstNumber,secondNumber);

    // Comparing the value of expected and the dispalyed value.
    const displayedValue = await simpPageDemo.verify_getSum(expSum);
    expect(displayedValue).toBe(expSum);
    
  
});



