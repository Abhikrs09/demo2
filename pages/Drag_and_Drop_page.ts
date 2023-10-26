import { Page } from "@playwright/test";

export default class Drag_and_Drop{

    constructor(public page : Page){}


    async drag1(){

        const src = await this.page.locator('#draggable');
        const dst = await this.page.locator('#droppable');
    

        if (src && dst){
            const scrBound = await src.boundingBox();
            const dstBound = await dst.boundingBox();

            if (scrBound && dstBound){
                await this.page.mouse.move(scrBound.x + scrBound.width/2 , scrBound.y + scrBound.height/2);
                await this.page.mouse.down();
                await this.page.mouse.move(dstBound.x + dstBound.width/2 , dstBound.y + dstBound.height/2  );
                await this.page.mouse.down()
            }
        
        }

    
        await this.page.waitForTimeout(3000);
    }



    async scrollToPosition(y: number) {
        await this.page.evaluate((scrollY) => {
          window.scrollTo(0, scrollY);
        }, y);
      }



}