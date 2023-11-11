import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Zoomit]'
})
export class ZoomitDirective {

  constructor(private el : ElementRef)
  {
    console.log(this.el)
    this.el.nativeElement.style.color="grey"
    this.el.nativeElement.style.fontSize="2rem"
    this.el.nativeElement.style.backgroundColor="yellow"

    console.log("Zoomit directive call constructor")
  }

}
//fonctionement théorique basique de l'injection de dépendance par inversion de controle
//donne moi une instance de ZommitDirective(el : elementRef)
//ah je détecte quelque chose dans les param du constructor
//typeof de el === elementRef
//est-ce que j'ai une instance de elementRef ? oui alors
//new ZoomitDirective(elementRefInstance)
//non ? let elementRefInstance = new ElementRef()
//new ZoomitDirective(elementRefInstance)


@Directive({
  selector: '[ZoomitEvent]'
})
export class ZoomitEventDirective {

  @HostListener("mouseenter")
  onMouseEnter(){
    this.el.nativeElement.style.color="grey"
    this.el.nativeElement.style.fontSize="2rem"
    this.el.nativeElement.style.backgroundColor="yellow"
  }


  @HostListener("mouseleave")
  onMouseLeave(){
    this.el.nativeElement.style.color="white"
    this.el.nativeElement.style.fontSize="1rem"
    this.el.nativeElement.style.backgroundColor="transparent"
  }



  constructor(private el : ElementRef)
  {
    console.log("Zoomit directive event call constructor")
  }

}












@Directive({
  selector: '[ZoomitEventParams]'
})
export class ZoomitEventParamsDirective {

  @Input() ZoomitEventParams : string[] = []

  @HostListener("click")
  onMouseEnter(){
    this.el.nativeElement.style.color="grey"
    this.el.nativeElement.style.fontSize= this.ZoomitEventParams[1] + "px"
    this.el.nativeElement.style.backgroundColor=this.ZoomitEventParams[0]
  }


  @HostListener("dblclick")
  onMouseLeave(){
    this.el.nativeElement.style.color="white"
    this.el.nativeElement.style.fontSize="1rem"
    this.el.nativeElement.style.backgroundColor="transparent"
  }



  constructor(private el : ElementRef)
  {
    console.log("Zoomit directive event call constructor")
  }

}