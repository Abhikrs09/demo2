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


