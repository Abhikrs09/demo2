import { Page } from "@playwright/test";

export default class DropdownDemo{

    constructor(public page : Page){
        this.page = page;
    }

    async verify_dropdown_page_titile(){
        const verify_page = await this.page.locator("//h1[text()='Dropdown Demo']").innerText();
        return verify_page;
    }

    async select_single_option( day : string){
        const element = '#select-demo';
        await this.page.selectOption(element, day);
    }

    async verify_single_option( ){

        const element = await this.page.waitForSelector("//p[@class='selected-value text-size-14']");

        if (element) {
          const isVisible = await element.isVisible();
          return true
        } else {
          return false

        }
    }
   // page.waitForSelector("//p[@class='selected-value text-size-14']")

    async dayDisplayed(){
        const displayedDay = (await this.page.locator("//p[@class='selected-value text-size-14']")).innerText();
        return displayedDay;
    }

    async selectMultipleOptions(options: string[]) {
        const dropdownSelector = '#multi-select'; // Replace with the actual selector of your dropdown
    
        // Use page.selectOption to select multiple options
        await this.page.selectOption(dropdownSelector, options);
      }

    
    async btn_first_select(){
        await this.page.getByRole('button', { name: 'First Selected' }).click();
    }
    
    async btn_last_select(){
        await this.page.getByRole('button', { name: 'Get Last Selected' }).click();
    }

    async verify_first_select() {
        const element = await this.page.getByText('First selected option is :').innerText();
        return element;
      }

    async verify_last_select(){
        const element = await this.page.getByText('First selected option is :').innerText();
        return element;
    }

}
