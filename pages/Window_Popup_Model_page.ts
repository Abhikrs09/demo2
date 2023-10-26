import { Page } from '@playwright/test';


export default class Window_Popup_Model_page {

  constructor(public page : Page) {}

  async getOriginalWindowUrl() {
    return this.page.url();
  }


  async clickFollowOnTwitter() {
    await this.page.click("'Follow On Twitter'");
  }

 
  async waitForNewWindow() {
    return this.page.waitForEvent('popup');
  }

 
  async getNewWindowUrl(newWindow) {
    return newWindow.url();
  }


}