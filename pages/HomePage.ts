import { Page } from '@playwright/test';

export default class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private simpleDemoFormLink = { name: 'Simple Form Demo' };
  private inputFormSubmitLink = { name: 'Input Form Submit' };
  private selectDropdownListLink = { name: 'Select Dropdown List' };
  private radioButtonsDemoLink = { name: 'Radio Buttons Demo' };
  private dragAndDropLink = { name: 'Drag and Drop' };
  private windowPopupModalLink = { name: 'Window Popup Modal' };
  private dragAndDropSlidersLink = { name: 'Drag & Drop Sliders' };
  private checkboxDemoLink = { name: 'Checkbox Demo'};

  // Functions

  async clickCheckboxDempLink(){
    await this.page.getByRole('link', this.checkboxDemoLink).click();
  }


  async clickSimpleDemoForm() {
    await this.page.getByRole('link', this.simpleDemoFormLink).click();
  }

  async clickInputFormSubmit() {
    await this.page.getByRole('link', this.inputFormSubmitLink).click();
  }

  async clickSelectDropdownList() {
    await this.page.getByRole('link', this.selectDropdownListLink).click();
  }

  async clickRadioButtonsDemo() {
    await this.page.getByRole('link', this.radioButtonsDemoLink).click();
  }

  async clickDragAndDrop() {
    await this.page.getByRole('link', this.dragAndDropLink).click();
  }

  async clickWindowPopupModal() {
    await this.page.getByRole('link', this.windowPopupModalLink).click();
  }

  async clickDragAndDropSliders() {
    await this.page.getByRole('link', this.dragAndDropSlidersLink).click();
  }




  //--------------------------------------------
  async scrollToPosition(y: number) {
    await this.page.evaluate((scrollY) => {
      window.scrollTo(0, scrollY);
    }, y);
  }
}
