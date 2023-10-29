import { Page } from '@playwright/test';

export default class RadioButtonDemoPage {
  constructor(public page: Page) {}

  // Locators
  private maleRadioButtonLabel = { label: 'Male' };
  private getSelectedValueButton = { name: 'Get value', exact: true };
  private resultText = { text: "Radio button 'Male' is checked" };
  private disabledRadioButtonLabel = { xpath: "//label[text()='Disabled Radio Button']" };
  private radioButton1 = { xpath : "//label[text()='Radio Button 1']" };
  private genderRadioButtons = { text: /^Gender : MaleFemaleOther$/ };
  private ageRadioButtonLabel = { label: '15 to 50' };
  private getGenderAgeValueButton = { name: 'Get values' };
  private genderResult = { text: 'Gender :' };
  private ageResult = { text: 'Age :' };
  private getValues = {xpath: "//button[text()='Get values']"};

  // Functions
  async selectMaleRadioButton() {
    await this.page.getByLabel(this.maleRadioButtonLabel.label).first().check();
  }

  async isMaleRadioButtonSelected() {
    const isSelected = await this.page.getByLabel(this.maleRadioButtonLabel.label).first().isChecked();
    return isSelected;
  }

  async clickGetValueButton() {
    await this.page.getByRole('button', { name: this.getSelectedValueButton.name, exact: true }).click();
  }

  async getSelectedValueText() {
    const element = await this.page.getByText(this.resultText.text);
    const extractedText = await element.innerText();
    return extractedText;
  }

  async isRadioButtonDisabled() {
    const element = await this.page.locator(this.disabledRadioButtonLabel.xpath).isEnabled();
    return  element;
  }

  async enableRadioButton() {
    const radioButtonElement = await this.page.locator(this.radioButton1.xpath);
    await radioButtonElement.click();
  }

  async clickGetValuesButton() {
    const getValuesElement = await this.page.locator(this.getValues.xpath);
    await getValuesElement.click();
  }

  async isRadioButtonEnabled() {
    const radioButtonElement = await this.page.locator(this.radioButton1.xpath);
  return await radioButtonElement.isDisabled();
  }




  async selectGenderMaleAndAge() {
    await this.page.locator('div').filter({ hasText: this.genderRadioButtons.text }).getByLabel(this.maleRadioButtonLabel.label, { exact: true }).check();
    await this.page.getByLabel(this.ageRadioButtonLabel.label).check();
  }

  async clickGetGenderAgeValueButton() {
    await this.page.getByRole('button', { name: this.getGenderAgeValueButton.name }).click();
  }

  

  async getGenderValueText() {
    const element = await this.page.locator('p').filter({ hasText: this.genderResult.text });
    const extractedText = await element.innerText();
    return extractedText;
  }

  async getAgeValueText() {
    const element = await this.page.locator('p').filter({ hasText: this.ageResult.text });
    const extractedText = await element.innerText();
    return extractedText;
  }

  async performGenderAgeRadioButtonDemo() {
    await this.selectGenderMaleAndAge();
    await this.clickGetGenderAgeValueButton();
    await this.clickGetValueButton();

  }

  async scrollToPosition(y: number) {
    await this.page.evaluate((scrollY) => {
      window.scrollTo(0, scrollY);
    }, y);
  }
  

}
