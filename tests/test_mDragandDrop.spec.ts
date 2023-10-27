import { expect } from "@playwright/test";
import { test } from "../Fixtures/Page_fixtures";


test('005 Drag and Drop (Demo 2)', async ({page,baseURL,homePage,dragAndDrop}) =>{

    await page.goto(`${baseURL}`);
    await homePage.clickDragAndDrop();
    // And a scroll is perforn to reach to see that option 
    await dragAndDrop.scrollToPosition(75);
    // We drag the object and put it into the another object using this function. 
    await dragAndDrop.drag1();

     
})

test('007 Drag and Drop (Demo 1)', async ({page,baseURL,homePage,dragAndDrop}) =>{

    await page.goto(`${baseURL}`);
    await homePage.clickDragAndDrop();

    //checking Item1 is visible or not
    const darg1_is_visible = await dragAndDrop.drag1IsVisible();
    expect(darg1_is_visible).toBeTruthy();
    //checking Item2 is visible or not
    const darg2_is_visible = await dragAndDrop.drag2IsVisible();
    expect(darg2_is_visible).toBeTruthy();

    //Dragging item1 
    await dragAndDrop.dragDraggable1();
    //Dragging item2 
    await dragAndDrop.dragDraggable2();
    
    //Verifying that item 1 has benn dragged or not
    const iteam1drag = await dragAndDrop.drag1IsDragged();
    expect(iteam1drag).toBeTruthy();

     
})



