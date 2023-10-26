import { Page } from "@playwright/test";

export default class InputFormSubmit{


    constructor(public page:Page){}
    

    async verify_heading(){
        const headingElement = await this.page.getByRole('heading', { name: 'Form Demo' });
        await headingElement.scrollIntoViewIfNeeded(); // Scroll the heading into view if needed
        const is_visible = await headingElement.isVisible();
        return is_visible;
    }

    async enter_name(name: string){
        await this.page.getByPlaceholder('Name', { exact: true }).fill(name);
    }

    async enter_email(email: string){
        await this.page.getByPlaceholder('Email', { exact: true }).fill(email);
    }

    async enter_pass(pass: string ){
        await this.page.getByPlaceholder('Password').fill(pass);
    }
    
    async enter_comp(comp: string ){
        await this.page.getByPlaceholder('Company').fill(comp);
    }

    async enter_website(web: string ){
        await this.page.getByPlaceholder('Website').fill(web);
    }

    async select_country(){
        await this.page.getByRole('combobox').selectOption('IN');
    }

    async enter_city(city: string ){
        await this.page.getByPlaceholder('City').fill(city);
    }

    async enter_add1(add1: string ){
        await this.page.getByPlaceholder('Address 1').fill(add1);
    }

    async enter_add2(add2: string ){
        await this.page.getByPlaceholder('Address 2').fill(add2);
    }

    async enter_state(state: string ){
        await this.page.getByPlaceholder('State').fill(state);
    }

    async enter_zip(zip: string ){

        await this.page.getByPlaceholder('Zip code').fill(zip);
    }
   
    async btn_submit(){
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async verify_input_page(){
        const verify_page = await this.page.getByText('Thanks for contacting us, we will get back to you shortly.')
        //await verify_page.scrollIntoViewIfNeeded(); // Scroll the heading into view if needed
        const is_visible = await verify_page.isVisible();
        return is_visible;
    }



    async login(loginDetails :{name: string , email: string ,pass: string , comp: string , web: string , city: string , add1: string , add2: string , state: string , zip: string})
    {

        await this.enter_name(loginDetails.name);
        await this.enter_email(loginDetails.email);
        await this.enter_pass(loginDetails.pass);
        await this.enter_comp(loginDetails.comp);
        await this.select_country();
        await this.enter_city(loginDetails.city);
        await this.enter_website(loginDetails.web);
        await this.enter_add1(loginDetails.add1);
        await this.enter_add2(loginDetails.add2);
        await this.enter_state(loginDetails.state);
        await this.enter_zip(loginDetails.zip);
        await this.btn_submit();
        

    }



}