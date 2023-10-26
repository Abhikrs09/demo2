import { test, expect } from "../Fixtures/Page_fixtures";
import {  generateRandomEmail,  getRandomString,  generateRandomFirstName,  generateRandomNumber} from "../utilities/random_data_generater";

test("003 Input Form Validations", async ({page,baseURL,homePage,inputFormSubmit}) => {
  
  // All data for the input fields
    const comp: string = getRandomString(5);
    const loginDetails = {
        name: generateRandomFirstName(),
        email: generateRandomEmail(),
        pass: generateRandomFirstName(),
        comp: getRandomString(5),
        web: "www" + comp + ".com",
        city: getRandomString(6),
        add1: getRandomString(10),
        add2: getRandomString(15),
        state: getRandomString(5),
        zip: generateRandomNumber(6),
    };

  await page.goto(`${baseURL}`);
  await homePage.clickInputFormSubmit();

  // Verifying that we are on the required page or not.
  expect(await inputFormSubmit.verify_heading()).toBeTruthy();

  // Putting all the data in the login Function
  await inputFormSubmit.login(loginDetails);

  // Verifying that we are going to the next page or not
  expect(await inputFormSubmit.verify_input_page()).toBeTruthy();


});
