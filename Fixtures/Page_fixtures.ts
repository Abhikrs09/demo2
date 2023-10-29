import {test as baseTest} from "@playwright/test";

import HomePage from '../pages/HomePage';
import Drag_and_Drop from "../pages/Drag_and_Drop_page";
import Dropdown_demo_page from '../pages/Dropdown_demo_page';
import InputFormSubmit from '../pages/InputFormSubmit_page';
import Radio_button_demo_page from '../pages/Radio_button_demo_page';
import SimpPageDemo from '../pages/SimpPageDemo_page';
import Window_Popup_Model_page from '../pages/Window_Popup_Model_page';
import DragAndDropSliderPage from "../pages/DragAndDropSlider";
import CheckBoxPage from "../pages/CheckBoxPage";

type pages ={
    homePage : HomePage;
    dragAndDrop : Drag_and_Drop;
    dropdownDemoPage : Dropdown_demo_page;
    inputFormSubmit : InputFormSubmit;
    radioButtonDemoPage : Radio_button_demo_page;
    simpPageDemo : SimpPageDemo;
    windowPopupModelPage : Window_Popup_Model_page;
    dragAndDropSliderPage : DragAndDropSliderPage;
    checkBoxPage:CheckBoxPage;
}


const testPages = baseTest.extend<pages>({

    checkBoxPage:async({page},use) =>{
        await use(new CheckBoxPage(page));
    },

    homePage : async ({page},use) =>{
        await use(new HomePage(page));
    },

    dragAndDrop : async ({page},use) =>{
        await use(new Drag_and_Drop(page));
    },

    dropdownDemoPage : async ({page},use) =>{
        await use(new Dropdown_demo_page(page));
    },

    inputFormSubmit : async ({page},use) =>{
        await use(new InputFormSubmit(page));
    },

    radioButtonDemoPage : async ({page},use) =>{
        await use(new Radio_button_demo_page(page));
    },

    simpPageDemo : async ({page},use) =>{
        await use(new SimpPageDemo(page));
    },

    windowPopupModelPage : async ({page},use) =>{
        await use(new Window_Popup_Model_page(page));
    },

    dragAndDropSliderPage : async({page},use) =>{
        await use(new DragAndDropSliderPage(page));
    }

})

export const test = testPages;
export const expect = testPages.expect;
