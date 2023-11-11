import { Component } from '@angular/core'

@Component({
  selector: 'app-bindings1',
  templateUrl: './bindings1.component.html'
})
export class Bindings1Component{

  //one way bindings
  maVariable : string = "Hello Worlds!"
  maVariable2 : number = 15
  maVariable3 : boolean = true

  //two way bindings
  maVar1 : string = ""
  maVar2 : number = 0
  maVar3 : boolean = false


  //event binding 
  counter : number = 0
  chrono : number = 0
  inter : any = null



  test(ref :any)
  {
    alert(ref)
  }
  

  addToCount()
  {
    this.counter++
  }

  remToCount()
  {
    this.counter--
  }

  resCount(){
    this.counter = 0
  }

  startChrono()
  {
    if(this.inter == null || this.inter >= 1)
    {
      clearInterval(this.inter)
      this.inter = setInterval(() => {
        this.chrono++
      },1000)
    }
  }

  stopChrono()
  {
    clearInterval(this.inter)
  }

  resetChrono()
  {
    this.chrono = 0
  }


}
