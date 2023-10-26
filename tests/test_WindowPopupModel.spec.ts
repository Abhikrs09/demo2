import { test, expect } from "../Fixtures/Page_fixtures";
import  * as windowsPopupModel_data from "../test-data/Window_Popup_Model_data.json"

test(' 009 Interact with Single tab', async ({ page, baseURL,homePage,windowPopupModelPage }) => {

  await page.goto(`${baseURL}`);


  // Comparing the value of the orignal Page Url and verifying that we are in the orignal page.
  expect(await windowPopupModelPage.getOriginalWindowUrl())
  .toBe(windowsPopupModel_data.org_page_link);


  await homePage.clickWindowPopupModal()

  // By using Promise.all, the code executes both waitForNewWindow()
  // and clickFollowOnTwitter() concurrently.
  const [twitter] = await Promise.all([
    windowPopupModelPage.waitForNewWindow(),
    windowPopupModelPage.clickFollowOnTwitter(),
  ]);


  // Verifying the Popup url
  expect(await windowPopupModelPage.getNewWindowUrl(twitter))
  .toBe(windowsPopupModel_data.link_twitter);
 

 

});

 