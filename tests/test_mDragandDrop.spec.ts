import { test } from "../Fixtures/Page_fixtures";


test('005 Drag and Drop (Demo 2)', async ({page,baseURL,homePage,dragAndDrop}) =>{

    await page.goto(`${baseURL}`);
    await homePage.clickDragAndDrop();

    // And a scroll is perforn to reach to see that option 
    await dragAndDrop.scrollToPosition(100);
    // We drag the object and put it into the another object using this function. 
    await dragAndDrop.drag1();

     
})



