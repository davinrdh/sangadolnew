import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement)
  }

  @HostListener('click')
  nextFunc(){
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elm.getElementByClassName("item")
    console.log(item)
  }

}
