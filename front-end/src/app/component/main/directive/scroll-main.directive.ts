import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: '[scroll-to-el]',
})
export class ScrollMainDirective {

  constructor(private el: ElementRef) {}

  private scrollUp: boolean = true


  @HostListener("click") onClick(){
    let bodyDoc = document.body
    if (bodyDoc.scrollTop == 0){
      this.scrollUp = true
      this.changeScroll(bodyDoc)
    } else if (bodyDoc.scrollTop == 2000){
      this.scrollUp = false
      this.changeScroll(bodyDoc)
    } else if (bodyDoc.scrollTop == 2431){
      bodyDoc.scrollTop = 2000
    } else {
      this.changeScroll(bodyDoc)
    }
  }

  private changeScroll(bodyDoc: any){
    bodyDoc.scrollTop = this.scrollUp ? (bodyDoc.scrollTop + 1000)
      : (bodyDoc.scrollTop - 1000)
  }


}
