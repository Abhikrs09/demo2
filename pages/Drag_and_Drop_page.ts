import { Page } from '@playwright/test';

export default class DragAndDropPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private draggable1 = { locator: '#draggable' };
  private droppable = { locator: '#droppable' };
  private draggable1Text = { locator: "//span[text()='Draggable 1']" };
  private draggable2Text = { locator: "//span[text()='Draggable 2']" };
  private dropZone = { locator: "//div[@dropzone='move']" };

  // Functions
  async drag1() {
    const src = await this.page.locator(this.draggable1.locator);
    const dst = await this.page.locator(this.droppable.locator);

    if (src && dst) {
      const srcBound = await src.boundingBox();
      const dstBound = await dst.boundingBox();

      if (srcBound && dstBound) {
        await this.page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2);
        await this.page.mouse.up();
      }
    }
  }

  async scrollToPosition(y: number) {
    await this.page.evaluate((scrollY) => {
      window.scrollTo(0, scrollY);
    }, y);
  }

  async drag1IsVisible() {
    const dragable1 = await this.page.locator(this.draggable1Text.locator).isVisible();
    return dragable1;
  }

  async drag2IsVisible() {
    const dragable2 = await this.page.locator(this.draggable2Text.locator).isVisible();
    return dragable2;
  }

  async dragDraggable1() {
    const drag1Src = await this.page.locator(this.draggable1Text.locator);
    const dropSrc = await this.page.locator(this.dropZone.locator);

    await drag1Src.hover();
    await this.page.mouse.down();
    await dropSrc.hover();
    await this.page.mouse.up();
  }

  async dragDraggable2() {
    const drag2Src = await this.page.locator(this.draggable2Text.locator);
    const dropSrc = await this.page.locator(this.dropZone.locator);

    await drag2Src.hover();
    await this.page.mouse.down();
    await dropSrc.hover();
    await this.page.mouse.up();
  }

  async drag1IsDragged() {
    const isDragged = await this.page.locator(this.draggable1Text.locator).isVisible();
    return isDragged;
  }
}
