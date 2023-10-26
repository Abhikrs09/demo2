import { test, expect } from "../Fixtures/Page_fixtures";


test (" 005 Visula comparision", async ({page,baseURL}) => {

    await page.goto(`${baseURL}`);

    // I have used this to wait for the page to reach a stable network idle state before
    // proceeding with further actions in the test.
    await page.waitForLoadState('networkidle');


    // After that i took a full page screenshot 
    const screenshot = await page.screenshot({
        fullPage: true,
      });


    // Threshold is used to allow 10% pixel difference between the actual and expected images.
    const threshold = 10; 

    // And then i have compare it between the expected and the final image.
    expect(screenshot).toMatchSnapshot("lambdatest.png", { threshold });

})
