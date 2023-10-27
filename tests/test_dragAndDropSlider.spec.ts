import { test, expect } from "../Fixtures/Page_fixtures";

test('Drag and drop slider to desired value', async ({ page,baseURL,homePage,dragAndDropSliderPage }) => {
  
  await page.goto(`${baseURL}`);
  const desiredSliderValue = 65;

  await homePage.clickDragAndDropSliders();

  const slider = await dragAndDropSliderPage.waitForSliderToBeVisible();
  expect(slider).toBeTruthy();

  // Use the setSliderToDesiredValue method to change the slider value
  await dragAndDropSliderPage.setSliderToDesiredValue(desiredSliderValue);

  // Verify that the slider value is set to the desired value
  const updatedSliderValue = await dragAndDropSliderPage.getCurrentSliderValue();
  expect(updatedSliderValue).toBe(desiredSliderValue);
});
