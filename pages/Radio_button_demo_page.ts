import { Page } from "@playwright/test";

export default class Radio_button_demo_page{

    constructor(public page : Page){}

    async btn_get_selected_value(){
        await this.page.getByLabel('Male').first().check();

    }

    async verify_isSelected_radio_btn(){

        const is_clicked = await this.page.getByLabel('Male').first().isChecked();
        return is_clicked;
    }


    async btn_get_value(){
        await this.page.getByRole('button', { name: 'Get value', exact: true }).click();
    }


    async verify_get_selected_value(){

        const element = await this.page.getByText('Radio button \'Male\' is checked').innerText();
        return element;
    }


    async btn_disable_radioButton(): Promise<boolean>{

        const element = await this.page.locator('//label[text()="Disabled Radio Button"]').isDisabled();
        return element
        
    }

     
    async btn_enable_radioButton(){
        const btn_disable = await this.page.getByText('Checkbox 1').check();
        return btn_disable;
    }

    async verify_btn_enable_radioButton(){
        const btn_disable = await this.page.getByText('Checkbox 1').isEnabled();
        return btn_disable;
    }


    async btn_gender(){
        await this.page.locator('div').filter({ hasText: /^Gender : MaleFemaleOther$/ }).getByLabel('Male', { exact: true }).check();
    }

    async btn_age(){
        await this.page.getByLabel('15 to 50').check();
    
    }

    async btn_get_gender_age_value(){

        await this.page.getByRole('button', { name: 'Get values' }).click();
    }

    async verify_gender_value(){
        const element = await this.page.locator('p').filter({ hasText: 'Gender :' });
        const extractedText = await element.innerText();
        return extractedText;
    }

    async verify_age_value(){
        const element = await this.page.locator('p').filter({ hasText: 'Age :' });
        const extractedText = await element.innerText();
        return extractedText;

    }

    async rdbtn_gender_age(){
        
        await this.btn_gender();
        await this.btn_age();
        await this.btn_get_gender_age_value()
    }


}