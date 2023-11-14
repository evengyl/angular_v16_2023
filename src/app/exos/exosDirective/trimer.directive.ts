import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrimer]'
})
export class TrimerDirective {

  //Partie 1
  // @HostListener("window:load") trimer()
  // {
  //   this.el.nativeElement.innerText = this.el.nativeElement.innerText.replaceAll(" ", "")
  // }


  //partie 2
  @HostListener("click") trimer()
  {
    this.el.nativeElement.innerText = this.el.nativeElement.innerText.replaceAll(" ", "")
  }


  //partie 3
  @HostListener("mouseover") overing()
  {
    this.el.nativeElement.style.color = "red"
  }

  @HostListener("mouseleave") deovering()
  {
    this.el.nativeElement.style.color = "black"
  }


  constructor(private el : ElementRef) { }

}
