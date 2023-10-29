import { Page } from '@playwright/test';

export default class CheckBoxPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private title = "//h1[text()='Checkbox Demo']";
    private ckb1="//label[text()='Click on check box']";
    private ckb1IsClicked = "//div[text()='Checked']";
    private ckb2="(//input[@class='mr-10'])[2]";
    private ckb4="(//label[text()='Option 1'])[2]";
    private ckb5="(//label[text()='Option 2'])[2]";
    private ckb6="(//label[text()='Option 3'])[2]";
    private ckb7="(//label[text()='Option 4'])[2]";
    private dckb1 = "//body[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]";
    private selectAll = { name: 'Check All' };
    private unSelectAll = { name: 'Uncheck All' };

    async istitleIsDispalyed(){
        return await this.page.isVisible(this.title);
    }

    async clickckb1btn(){
        await this.page.click(this.ckb4);
        await this.page.click(this.ckb5);
        await this.page.click(this.ckb6);
        await this.page.click(this.ckb7);

    }

    async clickOnCheckBoxckb1(){
        await this.page.click(this.ckb1);
    }

    async isclickOnCheckBoxckb1Displayed(){
        return await this.page.innerText(this.title);
    }

    async isCkb2disable1Displayed(){
        return await this.page.isDisabled(this.dckb1);
    }

    async clickCkc2(){
        await this.page.click(this.ckb2);
    }

    async isCkb2IsEnabled(){
        return await this.page.isEnabled(this.ckb2);
    }

    async isCkb4IsEnabled(){
        return await this.page.isEnabled(this.ckb4);
    }

    async clickSelectall(){
        await this.page.getByRole('button',this.selectAll).click();
    }

    async clickUnSelectAll(){
        await this.page.getByRole('button', this.unSelectAll).click();
    }
    async ckb5IsEnable(){
        return await this.page.isChecked(this.ckb5);
    }

}
