import { Page, expect } from '@playwright/test';

export default class DragAndDropSliderPage {
  constructor(public page: Page) {}

  async waitForSliderToBeVisible() {
    const verifySlider = await this.page.locator('#slider1').getByRole('slider').isVisible();
    return verifySlider;
  }

  async getCurrentSliderValue(): Promise<number> {
    return await this.page.$eval('.slider', (slider) =>
      parseFloat(slider.getAttribute('value') || '0')
    );
  }

  async setSliderToDesiredValue(desiredValue: number) {
    const slider = await this.page.$('.slider');
    if (slider) {
      await slider.focus();
      // Simulate keyboard input to change the slider value
      for (let i = 0; i < desiredValue; i++) {
        await this.page.keyboard.press('ArrowRight');
      }
    }
  }
  

  async verifySliderValueIsDesired(desiredValue: number) {
    const updatedSliderValue = await this.getCurrentSliderValue();
    expect(updatedSliderValue).toBe(desiredValue);
  }
}
