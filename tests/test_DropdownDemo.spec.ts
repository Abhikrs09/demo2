import { test, expect } from "../Fixtures/Page_fixtures";
import * as dropdownDemoData from '../test-data/Dropdown_demo_data.json';

test('004 Select Single Option and Multiple option From Dropdown', async ({ page, baseURL, homePage, dropdownDemoPage }) => {
  const day = dropdownDemoData.day;
  const states = dropdownDemoData.states; // Assuming you have an array of states in your JSON data


  await page.goto(`${baseURL}`);
  await homePage.clickSelectDropdownList();

  // Comparing the heading of the Page to ensure we are on the correct page.
  const heading_isVisible = await dropdownDemoPage.verify_dropdown_page_titile();
  expect(heading_isVisible).toBeTruthy();

  // Select a single day option.
  await dropdownDemoPage.select_single_option(day);

  const dayIsDisplayed = await dropdownDemoPage.verify_dropdown_page_titile();
  expect(dayIsDisplayed).toBeTruthy();


  // Verify the selected day matches the expected day.
  const output_day = await dropdownDemoPage.dayDisplayed();
  expect(output_day).toContain(day);

  await dropdownDemoPage.selectMultipleOptions(states);



});

// test('005 Select multiple Options From Dropdown', async ({ page, baseURL, homePage, dropdownDemoPage }) => {
//   const states = dropdownDemoData.states; // Assuming you have an array of states in your JSON data

//   await page.goto(`${baseURL}`);
//   await homePage.btn_select_dropdown_list();
//   //const states = [ "New York", "Texas", "Florida"]

//   // Comparing the heading of the Page to ensure we are on the correct page.
//   const heading_isVisible = await dropdownDemoPage.verify_dropdown_page_titile();
//   expect(heading_isVisible).toBeTruthy();

//   await dropdownDemoPage.selectMultipleOptions(states);

//     await page.waitForTimeout(5000); 
//     // await dropdownDemoPage.btn_first_select();
//     // await dropdownDemoPage.btn_last_select();

//     // console.log( dropdownDemoPage.verify_first_select());
//     // console.log( dropdownDemoPage.verify_last_select());

//     // Verify the first selected state.
//     // const firstSelectedState = await dropdownDemoPage.verify_first_select();
//     // expect(states[0]).toContain(firstSelectedState);

//     // // Verify the last selected state.
//     // const lastSelectedState = await dropdownDemoPage.verify_last_select();
//     // expect(states[states.length - 1]).toContain(lastSelectedState);
  
// });
